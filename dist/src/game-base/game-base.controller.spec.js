"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const game_base_controller_1 = require("./game-base.controller");
const game_base_service_1 = require("./game-base.service");
describe('GameBaseController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [game_base_controller_1.GameBaseController],
            providers: [game_base_service_1.GameBaseService],
        }).compile();
        controller = module.get(game_base_controller_1.GameBaseController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=game-base.controller.spec.js.map