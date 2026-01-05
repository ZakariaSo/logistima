import { Request, Response } from 'express';
import { Zone } from '../models';
import { ZoneCacheService } from '../services/zone-cache.service';

export class ZoneController {
  static async list(_: Request, res: Response) {
    const zones = await ZoneCacheService.getZones();
    res.json(zones);
  }

  static async create(req: Request, res: Response) {
    const zone = await Zone.create({ name: req.body.name });
    await ZoneCacheService.invalidate();
    res.status(201).json(zone);
  }
}
