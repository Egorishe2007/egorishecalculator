// __tests__/calculator.test.js
const calculator = require('../calculator');

test('sum of two numbers', () => {
  calculator.a = 2;
  calculator.b = 3;
  expect(calculator.sum()).toBe(5);
});

test('multiplication of two numbers', () => {
  calculator.a = 2;
  calculator.b = 3;
  expect(calculator.mul()).toBe(6);
});
