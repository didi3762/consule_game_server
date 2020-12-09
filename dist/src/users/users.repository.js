"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
let UsersRepository = class UsersRepository extends typeorm_1.Repository {
    async createNewPlayer(createUserDto) {
        const new_user = new user_entity_1.User();
        new_user.email = createUserDto.email;
        new_user.user_name = createUserDto.user_name;
        new_user.name = createUserDto.full_name;
        new_user.password = createUserDto.password;
        new_user.sum_score = 0;
        console.log(this, new_user);
        return await this.create(new_user).save();
    }
    async getall() {
        return await this.find();
    }
};
UsersRepository = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(user_entity_1.User)
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map