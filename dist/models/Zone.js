"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zone = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Zone extends sequelize_1.Model {
}
exports.Zone = Zone;
Zone.init({
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false }
}, { sequelize: database_1.sequelize, modelName: 'zone' });
