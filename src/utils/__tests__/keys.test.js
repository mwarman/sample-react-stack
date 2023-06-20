import { keys } from '../keys';

describe('keys', () => {
  it('should generate keys successfully', () => {
    const items = keys();

    expect(items).toBeDefined();
    expect(Array.isArray(items)).toBeTruthy();
  });

  it('should generate the default number of keys', () => {
    const items = keys();

    expect(items).toBeDefined();
    expect(items.length).toBe(1);
  });

  it('should generate the specified number of keys', () => {
    const items = keys(5);

    expect(items).toBeDefined();
    expect(items.length).toBe(5);
  });
});
