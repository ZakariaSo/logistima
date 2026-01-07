import dotenv from 'dotenv';
dotenv.config(); 

import { Sequelize, Transaction } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
  }
);

export const connectDatabase = async () => {
  let connected = false;

  while (!connected) {
    try {
      await sequelize.authenticate();
      connected = true;
      console.log('✅ Database connected');
    } catch (error) {
      console.log('⏳ Waiting for database...');
      await new Promise(res => setTimeout(res, 3000));
    }
  }

  await sequelize.sync({ alter: true });
};

