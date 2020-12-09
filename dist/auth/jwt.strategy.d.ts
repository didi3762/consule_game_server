import { ConfigService } from "@nestjs/config";
export declare class JwtStrategy {
    private confgService;
    constructor(confgService: ConfigService);
}
