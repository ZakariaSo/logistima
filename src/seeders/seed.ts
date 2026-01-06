import dotenv from 'dotenv';
dotenv.config();

import { connectDatabase } from '../config/database';
import { Zone, DeliveryPerson, Parcel } from '../models';

(async () => {
  await connectDatabase();

  await Zone.bulkCreate([
    { name: 'Sidi Maarif' },
    { name: 'Anfa' },
    { name: 'Gauthier' },
    { name: 'Maarif Extension' }
  ]);

  await DeliveryPerson.create({ availableSlots: 1 });
  await Parcel.create({});

  console.log('Seed completed');
  process.exit(0);
})();
