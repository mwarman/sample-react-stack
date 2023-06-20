import storage from '../storage';

describe('storage', () => {
  describe('getItem', () => {
    const key = 'key';
    const value = 'value';

    beforeEach(() => {
      localStorage.setItem(key, value);
    });

    afterEach(() => {
      localStorage.clear();
    });

    it('should get item successfully', () => {
      const item = storage.getItem(key);

      expect(item).toEqual(value);
    });
  });

  describe('setItem', () => {
    const key = 'key';
    const value = 'value';

    afterEach(() => {
      localStorage.clear();
    });

    it('should set item successfully', () => {
      storage.setItem(key, value);

      expect(localStorage.getItem(key)).toBe(value);
    });
  });

  describe('getJson', () => {
    const key = 'key';
    const value = { attr: 'value' };

    beforeEach(() => {
      localStorage.setItem(key, JSON.stringify(value));
    });

    afterEach(() => {
      localStorage.clear();
    });

    it('should get JSON successfully', () => {
      const jsonItem = storage.getJson(key);

      expect(jsonItem).toEqual(value);
    });
  });

  describe('setJson', () => {
    const key = 'key';
    const value = { attr: 'value' };

    afterEach(() => {
      localStorage.clear();
    });

    it('should set JSON successfully', () => {
      storage.setJson(key, value);

      expect(JSON.parse(localStorage.getItem(key))).toEqual(value);
    });
  });

  describe('removeItem', () => {
    const key = 'key';
    const value = 'value';

    beforeEach(() => {
      localStorage.setItem(key, value);
    });

    afterEach(() => {
      localStorage.clear();
    });

    it('should remove item successfully', () => {
      storage.removeItem(key);

      expect(localStorage.getItem(key)).not.toBeDefined();
    });
  });
});
