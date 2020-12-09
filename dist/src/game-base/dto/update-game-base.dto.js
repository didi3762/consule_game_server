"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapped_types_1 = require("@nestjs/mapped-types");
const create_game_base_dto_1 = require("./create-game-base.dto");
class UpdateGameBaseDto extends mapped_types_1.PartialType(create_game_base_dto_1.CreateGameBaseDto) {
}
exports.UpdateGameBaseDto = UpdateGameBaseDto;
//# sourceMappingURL=update-game-base.dto.js.map