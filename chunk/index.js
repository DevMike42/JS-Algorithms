// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

module.exports = {
  chunk: function (array, size) {
    const chunked = [];

    for (const element of array) {
      let lastEl = chunked[chunked.length - 1];

      if (!lastEl || lastEl.length === size) {
        chunked.push([element]);
      } else {
        lastEl.push(element);
      }
    }

    return chunked;
  },
  // ========================================
  // Solution Two using Array.slice()
  chunkSlice: function (array, size) {
    // Create new empty arr for final chunked array
    const chunked = [];
    // Create index value for while loop
    let index = 0;

    // Loop through array
    while (index < array.length) {
      // Pull elements out of array according to the
      // starting index and ending index (based on size)
      chunked.push(array.slice(index, index + size))
      // Increment index by size to move to the next chunk
      index += size;
    }

    return chunked;
  },
  // ========================================
  // Solution Three using Array.splice()
  chunkSplice: function (array, size) {
    // Create new empty arr for final chunked array
    const chunked = [];
    // Find the total num of Elements the new chunked
    // array will contain
    const totalNumOfEl = Math.ceil(array.length / size)
    // Set a current element value for while loop
    let currElement = 1;

    // Loop through original array
    while (currElement <= totalNumOfEl) {
      // Pull elements out of og array by size and push
      // onto new chunked array
      chunked.push(array.splice(0, size));
      // Increment current element value 
      currElement++;
    }

    return chunked;
  }
};