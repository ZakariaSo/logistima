"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneController = void 0;
const models_1 = require("../models");
const zone_cache_service_1 = require("../services/zone-cache.service");
class ZoneController {
    static async list(_, res) {
        const zones = await zone_cache_service_1.ZoneCacheService.getZones();
        res.json(zones);
    }
    static async create(req, res) {
        const zone = await models_1.Zone.create({ name: req.body.name });
        await zone_cache_service_1.ZoneCacheService.invalidate();
        res.status(201).json(zone);
    }
}
exports.ZoneController = ZoneController;
