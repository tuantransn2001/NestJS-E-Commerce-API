import { STATUS_CODE, STATUS_MESSAGE } from '../enums/api_enums';
import HttpException from './http.exception';
class RestFullAPI {
  public data: any;
  public message: string;
  public statusCode: number;

  constructor() {
    this.data = {};
    this.message = '';
    this.statusCode = STATUS_CODE.STATUS_CODE_200;
  }

  public static onSuccess(statusCode: number, message: string, data?: any) {
    return { statusCode, message, data };
  }

  public static onFail(statusCode: number, error: HttpException) {
    return {
      statusCode,
      error: error,
    };
  }

  public static async onArrayPromiseSuccess(promisesResult: Promise<any>[]) {
    const findResult = await Promise.all(promisesResult);
    const isOK = findResult.every((result) => result.statusCode === 200);
    return isOK
      ? {
          response: RestFullAPI.onSuccess(
            STATUS_CODE.STATUS_CODE_200,
            STATUS_MESSAGE.SUCCESS,
          ),
        }
      : {
          response: RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_500, {
            message: STATUS_MESSAGE.SERVER_ERROR,
          } as HttpException),
        };
  }
}

export default RestFullAPI;
