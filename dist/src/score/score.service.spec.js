"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const score_service_1 = require("./score.service");
describe('ScoreService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [score_service_1.ScoreService],
        }).compile();
        service = module.get(score_service_1.ScoreService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=score.service.spec.js.map