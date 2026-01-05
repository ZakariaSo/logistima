import { Router } from 'express';
import { ParcelController } from '../controllers/parcel.controller';

const router = Router();
router.post('/parcels/:id/assign', ParcelController.assign);

export default router;
