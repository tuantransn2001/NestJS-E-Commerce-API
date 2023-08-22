import { LoginDTO, RegisterDTO } from '../ts/dto/auth.dto';
import { User } from '../ts/interfaces/user.d.type';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login({ email, password }: LoginDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
    register({ type, firstName, lastName, address, email, phoneNumber, password, }: RegisterDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
    me(user: User): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
