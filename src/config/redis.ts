import { createClient, RedisClientType } from 'redis';

let redis: RedisClientType;

export const connectRedis = async () => {
  if (!process.env.REDIS_HOST) {
    throw new Error('REDIS_HOST is not set');
  }

  redis = createClient({
    socket: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT) || 6379,
    },
  });

  redis.on('error', err => {
    console.error('Redis error', err);
  });

  while (true) {
    try {
      await redis.connect();
      await redis.ping();
      console.log('✅ Redis connected');
      break;
    } catch {
      console.log('⏳ Waiting for Redis...');
      await new Promise(res => setTimeout(res, 3000));
    }
  }

  return redis;
};

export const getRedis = () => {
  if (!redis) {
    throw new Error('Redis not initialized. Call connectRedis() first.');
  }
  return redis;
};
