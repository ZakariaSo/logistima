import { Sequelize, Transaction } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE
  }
);

export const connectDatabase = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
};
