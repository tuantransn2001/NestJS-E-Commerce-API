import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { STATUS_CODE, STATUS_MESSAGE } from '../../ts/enums/api_enums';
import {
  IncomingCustomHeaders,
  JwtPayload,
  MyRequest,
} from '../../ts/interfaces/common';
import RestFullAPI from '../../utils/apiResponse';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthenticateMiddleware implements NestMiddleware {
  use(req: MyRequest & Request, res: Response, next: NextFunction) {
    try {
      const JWT_TOKEN_SECRET_KEY: string = process.env
        .JWT_TOKEN_SECRET_KEY as string;
      const { token } = req.headers as IncomingCustomHeaders;

      const foundUserAuthenticated = jwt.verify(
        token,
        JWT_TOKEN_SECRET_KEY,
      ) as JwtPayload;
      if (foundUserAuthenticated) {
        req.currentUser = foundUserAuthenticated.user;
        return next();
      } else {
        res
          .status(STATUS_CODE.STATUS_CODE_401)
          .send(
            RestFullAPI.onSuccess(
              STATUS_CODE.STATUS_CODE_401,
              STATUS_MESSAGE.UN_AUTHORIZE,
              'Client-Error && In-Valid Token',
            ),
          );
      }
    } catch (err) {
      res
        .status(STATUS_CODE.STATUS_CODE_401)
        .send(
          RestFullAPI.onSuccess(
            STATUS_CODE.STATUS_CODE_401,
            STATUS_MESSAGE.UN_AUTHORIZE,
            'Client-Error && In-Valid Token',
          ),
        );
    }
  }
}
