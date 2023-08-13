"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const common_1 = require("../ts/enums/common");
exports.databaseProviders = [
    {
        provide: common_1.PROVIDER_NAME.DATABASE_CONNECTION,
        useFactory: () => mongoose.connect(process.env.DB_CONNECT_LINK),
    },
];
//# sourceMappingURL=database.provider.js.map