// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const originalConsoleError = global.console.error.bind(global.console);

beforeAll(() => {
  global.console.error = jest.fn();
});

afterAll(() => {
  global.console.error = originalConsoleError;
});
