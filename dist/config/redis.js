"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = exports.redis = void 0;
const redis_1 = require("redis");
exports.redis = (0, redis_1.createClient)({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});
const connectRedis = async () => {
    if (!exports.redis.isOpen)
        await exports.redis.connect();
};
exports.connectRedis = connectRedis;
