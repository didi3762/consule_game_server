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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_service_1 = require(".././auth/auth.service");
const app_gateway_1 = require(".././app.gateway");
let UsersService = class UsersService {
    constructor(repo, authService, gateway) {
        this.repo = repo;
        this.authService = authService;
        this.gateway = gateway;
    }
    async create(createUserDto) {
        const passwordHash = await this.authService.hashPassword(createUserDto.password);
        const new_user = new user_entity_1.User();
        new_user.email = createUserDto.email;
        new_user.user_name = createUserDto.user_name;
        new_user.name = createUserDto.full_name;
        new_user.password = passwordHash;
        new_user.scores = createUserDto.scores;
        new_user.photo_url = createUserDto.photo_url;
        new_user.is_active = true;
        new_user.role = 'role';
        console.log(new_user);
        this.gateway.server.emit('new_user', new_user);
        const user = await this.repo.save(new_user);
        const { password } = user, result = __rest(user, ["password"]);
        return result;
    }
    async findAll() {
        const users = await this.repo.find();
        users.forEach(function (e) { delete e.password; });
        return users;
    }
    async findByMail(_email) {
        const user = await this.findBy(_email);
        if (user) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return;
    }
    async findBy(_email) {
        return await this.repo.findOne(_email, { relations: ["scores"] });
    }
    async update(_email, updateUserDto) {
        const user = await this.repo.findOne(_email, { relations: ['scores'] });
        if (user.role != 'admin') {
            user.sum_score = updateUserDto.sum_score;
            user.scores = updateUserDto.scores;
            user.save();
        }
    }
    async login(createUserDto) {
        const user = await this.validateUser(createUserDto.email, createUserDto.password);
        if (user) {
            const token = await this.authService.generateJWT(user);
            return Object.assign(Object.assign({}, user), { token });
        }
        else {
            console.log('Wrong Credentials');
        }
    }
    async validateUser(_email, password) {
        const user = await this.repo.findOne(_email, { relations: ["scores"] });
        if (user) {
            const match = await this.authService.comparePasswords(password, user.password);
            if (match) {
                user.is_active = true;
                user.save();
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            else {
                console.log('error');
            }
        }
    }
    async sign_out(_email) {
        console.log(_email);
        const user = await this.repo.findOne(_email, { relations: ['scores'] });
        user.is_active = false;
        user.save();
        const user_default = await this.repo.findOne("d@default.com", { relations: ['scores'] });
        return user_default;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService,
        app_gateway_1.AppGateway])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map