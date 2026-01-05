import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Zone extends Model {
  declare id: number;
  declare name: string;
}

Zone.init(
  {
    name: { type: DataTypes.STRING, allowNull: false }
  },
  { sequelize, modelName: 'zone' }
);
