const options = require('./index');

test('Reverse function exists', () => {
  expect(options.reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(options.reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(options.reverse('  abcd')).toEqual('dcba  ');
});

// Cleaner option
test('Reverse function exists', () => {
  expect(options.reverseCleaner).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(options.reverseCleaner('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(options.reverseCleaner('  abcd')).toEqual('dcba  ');
});

// More Manual Option
test('Reverse function exists', () => {
  expect(options.reverseManual).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(options.reverseManual('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(options.reverseManual('  abcd')).toEqual('dcba  ');
});

// More Complex Option
test('Reverse function exists', () => {
  expect(options.reverseComplex).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(options.reverseComplex('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(options.reverseComplex('  abcd')).toEqual('dcba  ');
});