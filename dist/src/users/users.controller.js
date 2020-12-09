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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const uuid_1 = require("uuid");
const path_1 = require("path");
const is_existis_guard_1 = require("./is_existis.guard");
exports.storge = {
    storage: multer_1.diskStorage({
        destination: './uploads/profileimages',
        filename: (req, file, cb) => {
            const filenme = path.parse(file.originalname).name.replace(/\s/g, '') + uuid_1.v4();
            const extension = path.parse(file.originalname).ext;
            cb(null, `${filenme}${extension}`);
        }
    })
};
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(createUserDto) {
        const player = await this.usersService.create(createUserDto);
        return player;
    }
    async loadFile(file) {
        return { filename: file.filename };
    }
    async getUploadFile(filename, res) {
        return await res.sendFile(path_1.join(process.cwd(), 'uploads/profileimages', filename));
    }
    findAll() {
        return this.usersService.findAll();
    }
    async logined(query) {
        console.log(query);
        return await this.usersService.login(query);
    }
    update(email, updateUserDto) {
        return this.usersService.update(email, updateUserDto);
    }
    sign_out(email, updateUserDto) {
        return this.usersService.sign_out(email);
    }
    remove(id) {
        return this.usersService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(is_existis_guard_1.ExisstingGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('uploadfile', exports.storge)),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "loadFile", null);
__decorate([
    common_1.Get('/get_upload/:filename'),
    __param(0, common_1.Param('filename')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUploadFile", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get('/login'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logined", null);
__decorate([
    common_1.Put(':email'),
    __param(0, common_1.Param('email')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    common_1.Get('sign_out/:email'),
    __param(0, common_1.Param('email')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "sign_out", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map