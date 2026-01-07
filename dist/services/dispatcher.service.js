"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatcherService = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const models_1 = require("../models");
class DispatcherService {
    static async assign(parcelId) {
        return database_1.sequelize.transaction(async (t) => {
            const courier = await models_1.DeliveryPerson.findOne({
                where: { availableSlots: { [sequelize_1.Op.gt]: 0 } },
                lock: t.LOCK.UPDATE,
                transaction: t
            });
            if (!courier) {
                throw new Error('NO_COURIER');
            }
            courier.availableSlots -= 1;
            await courier.save({ transaction: t });
            const parcel = await models_1.Parcel.findByPk(parcelId, { transaction: t });
            parcel.status = 'ASSIGNED';
            await parcel.save({ transaction: t });
            return courier.id;
        });
    }
}
exports.DispatcherService = DispatcherService;
