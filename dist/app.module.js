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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/entities/user.entity");
const users_repository_1 = require("./users/users.repository");
const games_module_1 = require("./games/games.module");
const game_entity_1 = require("./games/entities/game.entity");
const config_1 = require("@nestjs/config");
const score_module_1 = require("./score/score.module");
const score_entity_1 = require("./score/entities/score.entity");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
let AppModule = class AppModule {
    constructor() {
        console.log(path_1.join(__dirname, '..', '..', 'dist', 'angular', 'dist', 'gameproj'));
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(path_1.join(__dirname, '..', '..', 'dist', 'angular', 'dist', 'gameproj')),
            }),
            users_module_1.UsersModule,
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: process.env.DATABASE_URL,
                entities: [user_entity_1.User, game_entity_1.Game, score_entity_1.Score],
                synchronize: true,
            }),
            games_module_1.GamesModule,
            score_module_1.ScoreModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, users_repository_1.UsersRepository,
        ],
        exports: [database_module_1.DatabaseModule]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map