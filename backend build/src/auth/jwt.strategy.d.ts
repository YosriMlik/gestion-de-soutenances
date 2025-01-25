import { Strategy } from 'passport-jwt';
import { UsersService } from '../user/users.service';
import { ConfigService } from '@nestjs/config';
import { TokenBlacklistService } from './token-blacklist.service';
import { Request } from 'express';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    private configService;
    private tokenBlacklistService;
    constructor(usersService: UsersService, configService: ConfigService, tokenBlacklistService: TokenBlacklistService);
    validate(req: Request, payload: any): Promise<import("../user/user.entity").User>;
}
export {};
