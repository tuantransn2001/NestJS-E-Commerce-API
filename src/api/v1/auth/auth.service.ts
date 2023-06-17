import jwt from 'jsonwebtoken';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { LoginDTO } from '../ts/dto/auth.dto';
import { STATUS_CODE, STATUS_MESSAGE } from '../ts/enums/api_enums';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { User } from '../ts/interfaces/common';
import RestFullAPI from '../ts/utils/apiResponse';
import HttpException from '../ts/utils/http.exception';
import HashStringHandler from '../ts/utils/string.hash';
import { handleSeedData } from '../common';
import { USER_ARRAY } from '../data/handleGenerateSeedData';

@Injectable()
export class AuthService {
  constructor(
    @Inject(MODEL_NAME.USER)
    private userModel: Model<User>,
  ) {}

  async seedData() {
    return handleSeedData(this.userModel, USER_ARRAY);
  }

  async login({ email, password }: LoginDTO) {
    try {
      const foundUser = await this.userModel.findOne({
        email,
        password,
      });
      if (foundUser) {
        // * Case Exist

        const isMatchPassword: boolean = HashStringHandler.verify(
          password,
          foundUser.password,
        );
        switch (isMatchPassword) {
          case true: {
            const { id, firstName, lastName, email } = foundUser;

            const token = jwt.sign(
              { id, firstName, lastName, email },
              process.env.JWT_TOKEN_SECRET_KEY,
              {
                expiresIn: process.env.EXPIRES_IN,
              },
            );

            return RestFullAPI.onSuccess(
              STATUS_CODE.STATUS_CODE_200,
              STATUS_MESSAGE.SUCCESS,
              {
                access_token: token,
                expires_in: process.env.EXPIRES_IN,
              },
            );
            break;
          }
          case false: {
            return RestFullAPI.onSuccess(
              STATUS_CODE.STATUS_CODE_401,
              STATUS_MESSAGE.UN_AUTHORIZE,
            );
          }
        }
      } else {
        // * Case does not exist
        return RestFullAPI.onSuccess(
          STATUS_CODE.STATUS_CODE_404,
          STATUS_MESSAGE.NOT_FOUND,
          {
            message: `User with phone: ${email} doesn't exist ! Please check it and try again!`,
          },
        );
      }
    } catch (err) {
      return RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_404, {
        message: err.message,
      } as HttpException);
    }
  }
}
