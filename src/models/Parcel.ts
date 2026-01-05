import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Parcel extends Model {
  declare id: number;
  declare status: string;
}

Parcel.init(
  {
    status: { type: DataTypes.STRING, defaultValue: 'PENDING' }
  },
  { sequelize, modelName: 'parcel' }
);
