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
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const game_entity_1 = require("./entities/game.entity");
const users_service_1 = require("../users/users.service");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let GamesService = class GamesService {
    constructor(repo, userSvc) {
        this.repo = repo;
        this.userSvc = userSvc;
    }
    async create(createGameDto) {
        console.log(createGameDto);
        const new_game = new game_entity_1.Game();
        new_game.name = createGameDto.name;
        new_game.description = createGameDto.description;
        new_game.photo_url = createGameDto.photo_url;
        new_game.html_url = createGameDto.html_url;
        return await this.repo.save(new_game);
    }
    async findAll() {
        const games = await this.repo.find();
        return games;
    }
    async findUsers(_start) {
        const games = await this.repo.find();
        const filter = await games.filter(game => game.name.includes(_start));
        return await filter;
    }
    updateOne(id, game) {
        delete game.name;
        delete game.description;
        return rxjs_1.from(this.repo.update(id, game)).pipe(operators_1.switchMap(() => this.findOne(id)));
    }
    paginateAll(options) {
        return rxjs_1.from(nestjs_typeorm_paginate_1.paginate(this.repo, options, {})).pipe(operators_1.map((gameEntries) => gameEntries));
    }
    paginateByUser(options, game_name) {
        return rxjs_1.from(nestjs_typeorm_paginate_1.paginate(this.repo, options, {
            where: [
                { name: game_name }
            ]
        })).pipe(operators_1.map((gameEntries) => gameEntries));
    }
    findOne(id) {
        return `This action returns a #${id} game`;
    }
    update(id, updateGameDto) {
        return `This action updates a #${id} game`;
    }
    async remove(id) {
        await this.repo.delete(id);
        return await this.repo.find();
    }
};
GamesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(game_entity_1.Game)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], GamesService);
exports.GamesService = GamesService;
//# sourceMappingURL=games.service.js.map