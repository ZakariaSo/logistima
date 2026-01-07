"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneCacheService = void 0;
const redis_1 = require("../config/redis");
const models_1 = require("../models");
const ZONE_CACHE_KEY = 'zones:all';
const TTL = 60 * 60 * 24; // 24h
class ZoneCacheService {
    static async getZones() {
        const cached = await (0, redis_1.getRedis)().get(ZONE_CACHE_KEY);
        if (cached) {
            return JSON.parse(cached);
        }
        const zones = await models_1.Zone.findAll();
        await (0, redis_1.getRedis)().set(ZONE_CACHE_KEY, JSON.stringify(zones), {
            EX: TTL
        });
        return zones;
    }
    static async invalidate() {
        await (0, redis_1.getRedis)().del(ZONE_CACHE_KEY);
    }
}
exports.ZoneCacheService = ZoneCacheService;
