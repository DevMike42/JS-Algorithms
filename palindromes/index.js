// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

module.exports = {
  // =====================================================
  // Most direct solution
  isPalindrome: function (str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  },
  // =====================================================
  // Using the every() 
  // * Not ideal. More checks than needed (double comparrison)
  isPalindromeEvery: function (str) {
    // Convert string to an array
    return str.split('').every((char, i) => {
      // Compare each char to it's opposite at other end of arr
      return char === str[str.length - i - 1];
    });
  }
};