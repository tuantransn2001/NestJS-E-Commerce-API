import HttpException from './http.exception';
export declare const handleServerError: ({ message }: Error) => {
    statusCode: number;
    error: HttpException;
};
