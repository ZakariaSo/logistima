import dotenv from 'dotenv';
dotenv.config();


import { app } from './app';
import { connectDatabase } from './config/database';
import { connectRedis } from './config/redis';

(async () => {
  await connectDatabase();
  await connectRedis();

  app.listen(3000, () => {
    console.log('API running on port 3000');
  });
})();
