import { Model } from 'mongoose';
import { SearchUserDTO } from './dto/SearchUserDTO';
import { User } from '../ts/interfaces/user.d.type';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    handleSearchUser(payload: SearchUserDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
}
