import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class DeliveryPerson extends Model {
  declare id: number;
  declare availableSlots: number;
}

DeliveryPerson.init(
  {
    availableSlots: { type: DataTypes.INTEGER, allowNull: false }
  },
  { sequelize, modelName: 'delivery_person' }
);
