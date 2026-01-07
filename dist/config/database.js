"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    dialect: 'postgres',
    logging: false,
    isolationLevel: sequelize_1.Transaction.ISOLATION_LEVELS.SERIALIZABLE,
});
const connectDatabase = async () => {
    let connected = false;
    while (!connected) {
        try {
            await exports.sequelize.authenticate();
            connected = true;
            console.log('✅ Database connected');
        }
        catch (error) {
            console.log('⏳ Waiting for database...');
            await new Promise(res => setTimeout(res, 3000));
        }
    }
    await exports.sequelize.sync({ alter: true });
};
exports.connectDatabase = connectDatabase;
