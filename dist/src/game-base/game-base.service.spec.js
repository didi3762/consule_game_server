"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const game_base_service_1 = require("./game-base.service");
describe('GameBaseService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [game_base_service_1.GameBaseService],
        }).compile();
        service = module.get(game_base_service_1.GameBaseService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=game-base.service.spec.js.map