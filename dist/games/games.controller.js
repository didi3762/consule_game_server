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
exports.GamesController = exports.storge = exports.GAME_ENTRIES_URL = void 0;
const common_1 = require("@nestjs/common");
const games_service_1 = require("./games.service");
const create_game_dto_1 = require("./dto/create-game.dto");
const update_game_dto_1 = require("./dto/update-game.dto");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const path = require("path");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const rxjs_1 = require("rxjs");
const role_decorator_1 = require("./role.decorator");
const role_enum_1 = require("./role.enum");
const role_guard_1 = require("./role.guard");
exports.GAME_ENTRIES_URL = 'http://localhost:3000/games';
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
let GamesController = class GamesController {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    async create(createGameDto) {
        return await this.gamesService.create(createGameDto);
    }
    uploadFile(file, req) {
        console.log(file);
        return { filename: file.filename };
    }
    async getall() {
        return await this.gamesService.findAll();
    }
    index(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.gamesService.paginateAll({
            limit: Number(limit),
            page: Number(page),
            route: exports.GAME_ENTRIES_URL
        });
    }
    indexByUser(page = 1, limit = 10, game_name) {
        limit = limit > 100 ? 100 : limit;
        return this.gamesService.paginateByUser({
            limit: Number(limit),
            page: Number(page),
            route: exports.GAME_ENTRIES_URL + '/user/' + game_name
        }, Number(game_name));
    }
    findImage(imagename, res) {
        return rxjs_1.of(res.sendFile(path_1.join(process.cwd(), 'uploads/profileimages/' + imagename)));
    }
    getSearch(start) {
        console.log(start);
        return this.gamesService.findUsers(start);
    }
    update(id, updateGameDto) {
        return this.gamesService.update(+id, updateGameDto);
    }
    remove(id) {
        return this.gamesService.remove(+id);
    }
};
__decorate([
    role_decorator_1.Roles(role_enum_1.Role.Admin),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_game_dto_1.CreateGameDto]),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "create", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('uploadfile', exports.storge)),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "uploadFile", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "getall", null);
__decorate([
    common_1.Get('paginittion/'),
    __param(0, common_1.Query('page')),
    __param(1, common_1.Query('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "index", null);
__decorate([
    common_1.Get('user/:user'),
    __param(0, common_1.Query('page')),
    __param(1, common_1.Query('limit')),
    __param(2, common_1.Param('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "indexByUser", null);
__decorate([
    common_1.Get('image/:imagename'),
    __param(0, common_1.Param('imagename')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], GamesController.prototype, "findImage", null);
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Query('startsWith')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "getSearch", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_game_dto_1.UpdateGameDto]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "update", null);
__decorate([
    role_decorator_1.Roles(role_enum_1.Role.Admin),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GamesController.prototype, "remove", null);
GamesController = __decorate([
    common_1.Controller('games'),
    common_1.UseGuards(role_guard_1.RolesGuard),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], GamesController);
exports.GamesController = GamesController;
//# sourceMappingURL=games.controller.js.map