import { Worker } from 'bullmq';

new Worker(
  'delivery',
  async (job) => {
    if (job.name === 'route') {
      await new Promise((r) => setTimeout(r, 2000));
      console.log('Route calculated');
    }

    if (job.name === 'receipt') {
      console.log('Receipt generated');
    }
  },
  { connection: { host: process.env.REDIS_HOST || 'localhost', port: Number(process.env.REDIS_PORT) || 6379 } }
);
