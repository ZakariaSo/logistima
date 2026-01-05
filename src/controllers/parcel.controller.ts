import { Request, Response } from 'express';
import { DispatcherService } from '../services/dispatcher.service';
import { deliveryQueue } from '../services/queue.service';

export class ParcelController {
  static async assign(req: Request, res: Response) {
    try {
      const courierId = await DispatcherService.assign(+req.params.id);

      await deliveryQueue.add('route', {});
      await deliveryQueue.add('receipt', {});

      res.status(201).json({ courierId });
    } catch {
      res.status(409).json({ error: 'No available courier' });
    }
  }
}
