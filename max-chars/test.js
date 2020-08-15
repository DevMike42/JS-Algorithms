const options = require('./index');

test('maxChar function exists', () => {
  expect(typeof options.maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(options.maxChar('a')).toEqual('a');
  expect(options.maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(options.maxChar('ab1c1d1e1f1g1')).toEqual('1');
});

// ==============================
// Cleaner version
test('maxChar function exists', () => {
  expect(typeof options.maxCharClean).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(options.maxCharClean('a')).toEqual('a');
  expect(options.maxCharClean('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(options.maxCharClean('ab1c1d1e1f1g1')).toEqual('1');
});