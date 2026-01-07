import { DispatcherService } from '../src/services/dispatcher.service';
import { Parcel, DeliveryPerson } from '../src/models';
import { sequelize } from '../src/config/database';

beforeAll(async () => {
  await sequelize.sync({ force: true });
  
  await DeliveryPerson.create({
    id: 1,
    availableSlots: 1
  });

  await Parcel.create({
    id: 1,
    status: 'PENDING'
  });
});

afterAll(async () => {
  await sequelize.close();
});

test('Only one assignment succeeds', async () => {
  const promises = Array.from({ length: 50 }).map(() =>
    DispatcherService.assign(1).then(
      () => 'OK',
      () => 'FAIL'
    )
  );

  const results = await Promise.all(promises);
  expect(results.filter(r => r === 'OK').length).toBe(1);
});
