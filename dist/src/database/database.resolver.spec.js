"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const database_resolver_1 = require("./database.resolver");
const database_service_1 = require("./database.service");
describe('DatabaseResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [database_resolver_1.DatabaseResolver, database_service_1.DatabaseService],
        }).compile();
        resolver = module.get(database_resolver_1.DatabaseResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=database.resolver.spec.js.map