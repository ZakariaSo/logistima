import { getRedis } from '../config/redis';
import { Zone } from '../models';

const ZONE_CACHE_KEY = 'zones:all';
const TTL = 60 * 60 * 24; // 24h

export class ZoneCacheService {
  static async getZones() {
    const cached = await getRedis().get(ZONE_CACHE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }

    const zones = await Zone.findAll();
    await getRedis().set(ZONE_CACHE_KEY, JSON.stringify(zones), {
      EX: TTL
    });

    return zones;
  }

  static async invalidate() {
    await getRedis().del(ZONE_CACHE_KEY);
  }
} 
