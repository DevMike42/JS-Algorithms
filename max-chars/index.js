// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

module.exports = {
  maxChar: function (str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }

    for (const char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }

    return maxChar;
  },
  // ========================================
  // Cleaner version with forEach()
  maxCharClean: function (str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    const tempArr = str.split('');

    tempArr.forEach(char => char ? charMap[char]++ : charMap[char] = 1);

    for (const char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }

    return maxChar;
  }
};