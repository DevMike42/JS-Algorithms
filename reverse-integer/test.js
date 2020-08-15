const options = require('./index');

test('ReverseInt function exists', () => {
  expect(options.reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(options.reverseInt(0)).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
  expect(options.reverseInt(5)).toEqual(5);
  expect(options.reverseInt(15)).toEqual(51);
  expect(options.reverseInt(90)).toEqual(9);
  expect(options.reverseInt(2359)).toEqual(9532);
});

test('ReverseInt flips a negative number', () => {
  expect(options.reverseInt(-5)).toEqual(-5);
  expect(options.reverseInt(-15)).toEqual(-51);
  expect(options.reverseInt(-90)).toEqual(-9);
  expect(options.reverseInt(-2359)).toEqual(-9532);
});