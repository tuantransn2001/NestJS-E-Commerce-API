/// <reference types="node" />
import { Request } from 'express';
import { IncomingHttpHeaders } from 'http2';
import { User } from './user.d.type';
export interface MyRequest extends Request {
    currentUser?: Partial<User>;
}
export interface IncomingCustomHeaders extends IncomingHttpHeaders {
    token: string;
}
export interface JwtPayload {
    user: Partial<User>;
    iat: number;
    exp: number;
}
