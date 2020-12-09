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
const game_base_service_1 = require("./game-base.service");
const create_game_base_dto_1 = require("./dto/create-game-base.dto");
const update_game_base_dto_1 = require("./dto/update-game-base.dto");
let GameBaseController = class GameBaseController {
    constructor(gameBaseService) {
        this.gameBaseService = gameBaseService;
    }
    create(createGameBaseDto) {
        return this.gameBaseService.create(createGameBaseDto);
    }
    findAll() {
        return this.gameBaseService.findAll();
    }
    findOne(id) {
        return this.gameBaseService.findOne(+id);
    }
    update(id, updateGameBaseDto) {
        return this.gameBaseService.update(+id, updateGameBaseDto);
    }
    remove(id) {
        return this.gameBaseService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_game_base_dto_1.CreateGameBaseDto]),
    __metadata("design:returntype", void 0)
], GameBaseController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameBaseController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameBaseController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_game_base_dto_1.UpdateGameBaseDto]),
    __metadata("design:returntype", void 0)
], GameBaseController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameBaseController.prototype, "remove", null);
GameBaseController = __decorate([
    common_1.Controller('game-base'),
    __metadata("design:paramtypes", [game_base_service_1.GameBaseService])
], GameBaseController);
exports.GameBaseController = GameBaseController;
//# sourceMappingURL=game-base.controller.js.map