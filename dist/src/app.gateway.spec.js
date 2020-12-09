"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const app_gateway_1 = require("./app.gateway");
describe('AppGateway', () => {
    let gateway;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [app_gateway_1.AppGateway],
        }).compile();
        gateway = module.get(app_gateway_1.AppGateway);
    });
    it('should be defined', () => {
        expect(gateway).toBeDefined();
    });
});
//# sourceMappingURL=app.gateway.spec.js.map