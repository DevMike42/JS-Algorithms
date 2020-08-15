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
    const chunked = [];
    let index = 0;

    while (index < array.length) {
      chunked.push(array.slice(index, index + size))
      index += size;
    }

    return chunked;
  },
  // ========================================
  // Solution Three using Array.splice()
  chunkSplice: function (array, size) {
    const chunked = [];
    const numEl = Math.ceil(array.length / size)

    for (let i = 1; i <= numEl; i++) {
      chunked.push(array.splice(0, size));
      console.log(chunked);
    }

    return chunked
  }
};