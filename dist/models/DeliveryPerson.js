"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryPerson = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class DeliveryPerson extends sequelize_1.Model {
}
exports.DeliveryPerson = DeliveryPerson;
DeliveryPerson.init({
    availableSlots: { type: sequelize_1.DataTypes.INTEGER, allowNull: false }
}, { sequelize: database_1.sequelize, modelName: 'delivery_person' });
