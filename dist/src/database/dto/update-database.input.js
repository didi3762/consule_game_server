"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDatabaseInput = void 0;
const create_database_input_1 = require("./create-database.input");
const graphql_1 = require("@nestjs/graphql");
class UpdateDatabaseInput extends graphql_1.PartialType(create_database_input_1.CreateDatabaseInput) {
}
exports.UpdateDatabaseInput = UpdateDatabaseInput;
//# sourceMappingURL=update-database.input.js.map