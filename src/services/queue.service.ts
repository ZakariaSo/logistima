import { Queue } from 'bullmq';

export const deliveryQueue = new Queue('delivery', {
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379
  }
});
