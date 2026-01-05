import { DispatcherService } from '../src/services/dispatcher.service';

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
