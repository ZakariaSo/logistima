import { Queue } from 'bullmq';
import { redis } from '../config/redis';

export const deliveryQueue = new Queue('delivery', {
  connection: {
    host: 'localhost',
    port: 6379
  }
});
