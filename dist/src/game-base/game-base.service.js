"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let GameBaseService = class GameBaseService {
    create(createGameBaseDto) {
        return 'This action adds a new gameBase';
    }
    findAll() {
        return `This action returns all gameBase`;
    }
    findOne(id) {
        return `This action returns a #${id} gameBase`;
    }
    update(id, updateGameBaseDto) {
        return `This action updates a #${id} gameBase`;
    }
    remove(id) {
        return `This action removes a #${id} gameBase`;
    }
};
GameBaseService = __decorate([
    common_1.Injectable()
], GameBaseService);
exports.GameBaseService = GameBaseService;
//# sourceMappingURL=game-base.service.js.map