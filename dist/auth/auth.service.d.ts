import { Model } from 'mongoose';
import { LoginDTO, RegisterDTO } from '../ts/dto/auth.dto';
import { User } from '../ts/interfaces/user.d.type';
import HttpException from '../utils/http.exception';
export declare class AuthService {
    private userModel;
    constructor(userModel: Model<User>);
    login({ email, password }: LoginDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: HttpException;
    }>;
    register({ type, firstName, lastName, address, email, phoneNumber, password, }: RegisterDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: HttpException;
    }>;
}
