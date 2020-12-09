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
exports.DatabaseResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const database_service_1 = require("./database.service");
const create_database_input_1 = require("./dto/create-database.input");
const update_database_input_1 = require("./dto/update-database.input");
let DatabaseResolver = class DatabaseResolver {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    create(createDatabaseInput) {
        return this.databaseService.create(createDatabaseInput);
    }
    findAll() {
        return this.databaseService.findAll();
    }
    findOne(id) {
        return this.databaseService.findOne(id);
    }
    update(updateDatabaseInput) {
        return this.databaseService.update(updateDatabaseInput.id, updateDatabaseInput);
    }
    remove(id) {
        return this.databaseService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation('createDatabase'),
    __param(0, graphql_1.Args('createDatabaseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_database_input_1.CreateDatabaseInput]),
    __metadata("design:returntype", void 0)
], DatabaseResolver.prototype, "create", null);
__decorate([
    graphql_1.Query('database'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatabaseResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query('database'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DatabaseResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation('updateDatabase'),
    __param(0, graphql_1.Args('updateDatabaseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_database_input_1.UpdateDatabaseInput]),
    __metadata("design:returntype", void 0)
], DatabaseResolver.prototype, "update", null);
__decorate([
    graphql_1.Mutation('removeDatabase'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DatabaseResolver.prototype, "remove", null);
DatabaseResolver = __decorate([
    graphql_1.Resolver('Database'),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DatabaseResolver);
exports.DatabaseResolver = DatabaseResolver;
//# sourceMappingURL=database.resolver.js.map