import { delay } from '../delay';

describe('delay', () => {
  it('should delay successfully', async () => {
    const start = Date.now();
    await delay();
    const end = Date.now();

    expect(start).toBeLessThan(end);
  });

  it('should delay for the default time', async () => {
    const start = Date.now();
    await delay();
    const end = Date.now();

    expect(end - start).toBeGreaterThanOrEqual(2000);
  }, 3000);

  it('should delay for the specified time', async () => {
    const start = Date.now();
    await delay(100);
    const end = Date.now();

    expect(end - start).toBeGreaterThanOrEqual(100);
    expect(end - start).toBeLessThan(150);
  }, 1000);
});
