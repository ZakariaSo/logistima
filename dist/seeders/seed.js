"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database_1 = require("../config/database");
const models_1 = require("../models");
(async () => {
    await (0, database_1.connectDatabase)();
    await models_1.Zone.bulkCreate([
        { name: 'Sidi Maarif' },
        { name: 'Anfa' },
        { name: 'Gauthier' },
        { name: 'Maarif Extension' }
    ]);
    await models_1.DeliveryPerson.create({ availableSlots: 1 });
    await models_1.Parcel.create({});
    console.log('Seed completed');
    process.exit(0);
})();
