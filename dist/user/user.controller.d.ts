import { SearchUserDTO } from './dto/SearchUserDTO';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    searchUser(searchUserDTO: SearchUserDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
}
