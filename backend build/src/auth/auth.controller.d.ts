import { AuthService } from './auth.service';
import { TokenBlacklistService } from './token-blacklist.service';
export declare class AuthController {
    private authService;
    private tokenBlacklistService;
    constructor(authService: AuthService, tokenBlacklistService: TokenBlacklistService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
}
