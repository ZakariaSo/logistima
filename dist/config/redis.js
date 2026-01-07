"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRedis = exports.connectRedis = void 0;
const redis_1 = require("redis");
let redis;
const connectRedis = async () => {
    if (!process.env.REDIS_HOST) {
        throw new Error('REDIS_HOST is not set');
    }
    redis = (0, redis_1.createClient)({
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
        }
        catch {
            console.log('⏳ Waiting for Redis...');
            await new Promise(res => setTimeout(res, 3000));
        }
    }
    return redis;
};
exports.connectRedis = connectRedis;
const getRedis = () => {
    if (!redis) {
        throw new Error('Redis not initialized. Call connectRedis() first.');
    }
    return redis;
};
exports.getRedis = getRedis;
