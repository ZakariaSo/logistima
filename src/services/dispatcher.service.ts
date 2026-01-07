import { Op } from 'sequelize';
import { sequelize } from '../config/database';
import { DeliveryPerson, Parcel } from '../models';

export class DispatcherService {
  static async assign(parcelId: number) {
    return sequelize.transaction(async (t) => {
      const courier = await DeliveryPerson.findOne({
        where: { availableSlots: { [Op.gt]: 0 } },
        lock: t.LOCK.UPDATE,
        transaction: t
      });

      if (!courier) {
        throw new Error('NO_COURIER');
      }

      courier.availableSlots -= 1;
      await courier.save({ transaction: t });

      const parcel = await Parcel.findByPk(parcelId, { transaction: t });
      parcel!.status = 'ASSIGNED';
      await parcel!.save({ transaction: t });

      return courier.id;
    });
  }
}
