"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parcel = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Parcel extends sequelize_1.Model {
}
exports.Parcel = Parcel;
Parcel.init({
    status: { type: sequelize_1.DataTypes.STRING, defaultValue: 'PENDING' }
}, { sequelize: database_1.sequelize, modelName: 'parcel' });
