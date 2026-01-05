import { Router } from 'express';
import { ParcelController } from '../controllers/parcel.controller';
import { ZoneController } from '../controllers/zone.controller';

const router = Router();

router.post('/parcels/:id/assign', ParcelController.assign);
router.get('/zones', ZoneController.list);
router.post('/zones', ZoneController.create);

export default router;
