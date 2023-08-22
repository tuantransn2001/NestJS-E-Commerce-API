import { STATUS_CODE } from '../ts/enums/api_enums';
import RestFullAPI from './apiResponse';
import HttpException from './http.exception';

export const handleServerError = ({ message }: Error) => {
  const error: HttpException = {
    status: STATUS_CODE.STATUS_CODE_500,
    message,
  } as HttpException;

  return RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_500, error);
};
