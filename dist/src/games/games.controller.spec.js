"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const games_controller_1 = require("./games.controller");
const games_service_1 = require("./games.service");
describe('GamesController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [games_controller_1.GamesController],
            providers: [games_service_1.GamesService],
        }).compile();
        controller = module.get(games_controller_1.GamesController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=games.controller.spec.js.map