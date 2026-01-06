"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    isolationLevel: sequelize_1.Transaction.ISOLATION_LEVELS.SERIALIZABLE
});
const connectDatabase = async () => {
    await exports.sequelize.authenticate();
    await exports.sequelize.sync();
};
exports.connectDatabase = connectDatabase;
