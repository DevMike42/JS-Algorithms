const options = require('./index');

test('palindrome function is defined', () => {
  expect(typeof options.isPalindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(options.isPalindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(options.isPalindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(options.isPalindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(options.isPalindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(options.isPalindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(options.isPalindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(options.isPalindrome('pennep')).toBeTruthy();
});

// ===================================
// every() solution

test('palindrome function is defined', () => {
  expect(typeof options.isPalindromeEvery).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(options.isPalindromeEvery('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(options.isPalindromeEvery(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(options.isPalindromeEvery('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(options.isPalindromeEvery('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(options.isPalindromeEvery('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(options.isPalindromeEvery('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(options.isPalindromeEvery('pennep')).toBeTruthy();
});