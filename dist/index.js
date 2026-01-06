"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = require("./app");
const database_1 = require("./config/database");
const redis_1 = require("./config/redis");
(async () => {
    await (0, database_1.connectDatabase)();
    await (0, redis_1.connectRedis)();
    app_1.app.listen(3000, () => {
        console.log('API running on port 3000');
    });
})();
