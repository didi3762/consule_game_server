"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_service_1 = require("../auth/auth.service");
let RolesGuard = class RolesGuard {
    constructor(reflector, authService) {
        this.reflector = reflector;
        this.authService = authService;
    }
    async canActivate(context) {
        const requiredRoles = this.reflector.get('roles', context.getHandler());
        if (!requiredRoles) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        if (!req.headers.authorization) {
            console.log(req.headers);
            return false;
        }
        const user = await this.validateToken(req.headers.authorization);
        return await this.matchRoles(requiredRoles, user['role']);
    }
    async validateToken(auth) {
        if (auth.split(' ')[0] !== 'Bearer') {
            console.log(auth.split(' ')[0]);
            throw new common_1.HttpException('invalid _token', common_1.HttpStatus.FORBIDDEN);
        }
        const token = auth.split(' ')[1];
        try {
            const decode = await this.authService.generateToken(token);
            return decode;
        }
        catch (err) {
            const message = "Token error: " + (err.message || err.name);
            console.log(message);
            throw new common_1.HttpException(message, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async matchRoles(requiredRoles, user_role) {
        if (requiredRoles[0] == user_role) {
            return true;
        }
        else {
            throw new common_1.HttpException("אין לך הרשאת מנהל", common_1.HttpStatus.FORBIDDEN);
        }
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector, auth_service_1.AuthService])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=role.guard.js.map