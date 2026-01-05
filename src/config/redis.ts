import { createClient } from 'redis';

export const redis = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

export const connectRedis = async () => {
  if (!redis.isOpen) await redis.connect();
};
