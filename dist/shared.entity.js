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
exports.Shared = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./users/entities/user.entity");
const game_entity_1 = require("./games/entities/game.entity");
let Shared = class Shared extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Shared.prototype, "user_email", void 0);
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Shared.prototype, "game_id", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_entity_1.User),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.User)
], Shared.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToOne(type => game_entity_1.Game),
    typeorm_1.JoinColumn(),
    __metadata("design:type", game_entity_1.Game)
], Shared.prototype, "game", void 0);
Shared = __decorate([
    typeorm_1.Entity('games')
], Shared);
exports.Shared = Shared;
//# sourceMappingURL=shared.entity.js.map