"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryQueue = void 0;
const bullmq_1 = require("bullmq");
exports.deliveryQueue = new bullmq_1.Queue('delivery', {
    connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: Number(process.env.REDIS_PORT) || 6379
    }
});
