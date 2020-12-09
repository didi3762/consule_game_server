"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const score_controller_1 = require("./score.controller");
const score_service_1 = require("./score.service");
describe('ScoreController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [score_controller_1.ScoreController],
            providers: [score_service_1.ScoreService],
        }).compile();
        controller = module.get(score_controller_1.ScoreController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=score.controller.spec.js.map