import { AuthService } from './auth.service';
import { Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    googlelogin(): void;
    googleloginCallBAck(req: Request, res: any): any;
}
