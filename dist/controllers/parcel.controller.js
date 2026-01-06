"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcelController = void 0;
const dispatcher_service_1 = require("../services/dispatcher.service");
const queue_service_1 = require("../services/queue.service");
class ParcelController {
    static async assign(req, res) {
        try {
            const courierId = await dispatcher_service_1.DispatcherService.assign(+req.params.id);
            await queue_service_1.deliveryQueue.add('route', {});
            await queue_service_1.deliveryQueue.add('receipt', {});
            res.status(201).json({ courierId });
        }
        catch {
            res.status(409).json({ error: 'No available courier' });
        }
    }
}
exports.ParcelController = ParcelController;
