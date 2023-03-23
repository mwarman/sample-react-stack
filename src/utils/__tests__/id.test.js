import { generateId } from '../id';

describe('id', () => {
  describe('generateId', () => {
    it('should generate id successfully', () => {
      const id = generateId();

      expect(id).toBeDefined();
    });

    it('should generate id with default length', () => {
      const id = generateId();

      expect(id.length).toBe(8);
    });

    it('should generate id with specified length', () => {
      const id = generateId(16);

      expect(id.length).toBe(16);
    });
  });
});
