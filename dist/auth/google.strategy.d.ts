import { ConfigService } from "@nestjs/config";
declare const GoogleStrategy_base: new (...args: any[]) => any;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private confgService;
    constructor(confgService: ConfigService);
    validate(request: any, accessToken: string, refreshToken: string, profile: any, done: Function): Promise<void>;
}
export {};
