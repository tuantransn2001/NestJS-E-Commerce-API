import { Request, Response, NextFunction } from 'express';
import { MyRequest } from '../../ts/interfaces/common';
import { NestMiddleware } from '@nestjs/common';
export declare class AuthenticateMiddleware implements NestMiddleware {
    use(req: MyRequest & Request, res: Response, next: NextFunction): void;
}
