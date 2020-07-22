// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

module.exports = {
  reverse: function (str) {
    // Convert the string to an Array
    const arr = str.split('');

    // Call the reverse() method on the Array
    arr.reverse();

    // Join the array back into a string and return result
    return arr.join('');
  },
  // =====================================================
  // Cleaner method

  reverseCleaner: function (str) {
    return str
      .split('')
      .reverse()
      .join('');
  },
  // =====================================================
  // More Manual Work

  reverseManual: function (str) {
    // Creat an empty string
    let reversed = '';

    // Iterate through each character and ad it to the start of 'reversed'
    for (let character of str) {
      reversed = character + reversed;
    }
    // Return the variable 'reversed'
    return reversed;
  },
  // =====================================================
  // More complex option

  reverseComplex: function (str) {
    return str.split('').reduce((reversed, character) => {
      return character + reversed;
    }, '')

    // Cleaned up version
    // return str.split('').reduce((rev, char) => char + rev, '')
  }

};