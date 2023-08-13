import { v4 as uuidv4 } from 'uuid';
import { sign } from 'jsonwebtoken';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { LoginDTO, RegisterDTO } from '../ts/dto/auth.dto';
import { STATUS_CODE, STATUS_MESSAGE } from '../ts/enums/api_enums';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { User } from '../ts/interfaces/user.d.type';
import RestFullAPI from '../ts/utils/apiResponse';
import HttpException from '../ts/utils/http.exception';
import HashStringHandler from '../ts/utils/string.hash';
import { USER_ROLE } from '../ts/enums/user_enum';
import {
  checkMissPropertyInObjectBaseOnValueCondition,
  isEmpty,
} from '../common';
import { handleServerError } from '../ts/utils/serverErrorHandler';

@Injectable()
export class AuthService {
  constructor(
    @Inject(MODEL_NAME.USER)
    private userModel: Model<User>,
  ) {}

  public async login({ email, password }: LoginDTO) {
    try {
      const foundUser = await this.userModel
        .findOne({
          email,
        })
        .exec();

      if (foundUser) {
        // * Case Exist
        const isMatchPassword: boolean = HashStringHandler.verify(
          password,
          foundUser.password,
        );
        switch (isMatchPassword) {
          case true: {
            const { id, firstName, lastName, email, type } = foundUser;
            const payload = {
              user: { id, firstName, lastName, email, type },
            };

            const token = sign(payload, process.env.JWT_TOKEN_SECRET_KEY, {
              expiresIn: process.env.EXPIRES_IN,
            });

            return RestFullAPI.onSuccess(
              STATUS_CODE.STATUS_CODE_200,
              STATUS_MESSAGE.SUCCESS,
              {
                access_token: token,
                expires_in: process.env.EXPIRES_IN,
              },
            );
          }
          case false: {
            return RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_401, {
              message: `Password is in-correct!`,
            } as HttpException);
          }
        }
      } else {
        // * Case does not exist
        return RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_404, {
          message: `User with email: ${email} doesn't exist ! Please check it and try again!`,
        } as HttpException);
      }
    } catch (err) {
      return RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_401, {
        message: `Client-Error & UnAuthorize`,
      } as HttpException);
    }
  }
  public async register({
    type,
    firstName,
    lastName,
    address,
    email,
    phoneNumber,
    password,
  }: RegisterDTO) {
    try {
      const argMissArg = checkMissPropertyInObjectBaseOnValueCondition(
        { firstName, lastName, address, email, phoneNumber, password },
        [undefined, ''],
      );

      if (isEmpty(argMissArg)) {
        const newUserDocument = {
          id: uuidv4(),
          type: type ? type : USER_ROLE.CUSTOMER,
          firstName,
          lastName,
          address,
          email,
          phoneNumber,
          password: HashStringHandler.hash(password, 10),
        };

        await this.userModel.create(newUserDocument);

        return RestFullAPI.onSuccess(
          STATUS_CODE.STATUS_CODE_200,
          STATUS_MESSAGE.SUCCESS,
        );
      } else {
        return RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_406, {
          message: argMissArg.join(',') + ' is required!',
        } as HttpException);
      }
    } catch (err) {
      return handleServerError(err);
    }
  }
}
