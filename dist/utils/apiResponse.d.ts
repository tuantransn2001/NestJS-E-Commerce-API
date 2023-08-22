import { STATUS_CODE } from '../ts/enums/api_enums';
import HttpException from './http.exception';
declare class RestFullAPI {
    data: any;
    message: string;
    statusCode: number;
    constructor();
    static onSuccess(statusCode: number, message: string, data?: any): {
        statusCode: number;
        message: string;
        data: any;
    };
    static onFail(statusCode: number, error: HttpException): {
        statusCode: number;
        error: HttpException;
    };
    static onArrayPromiseSuccess(promisesResult: Promise<any>[]): Promise<{
        statusCode: STATUS_CODE;
        response: {
            statusCode: number;
            message: string;
            data: any;
        };
    } | {
        statusCode: STATUS_CODE;
        response: {
            statusCode: number;
            error: HttpException;
        };
    }>;
}
export default RestFullAPI;
