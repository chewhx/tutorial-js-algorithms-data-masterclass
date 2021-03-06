/* Given an array, and a number. Find leading consecutive elements in the array which adds up to a maximum sum. */

function maxSubarraySum(array, number) {
  // if array length less than number, return null
  if (array.length < number) return null;
  // set two pointers, a = 0, b = 1
  let a = 0;
  let b = number - 1;
  // set two variables currentMax, sumOf
  let currentMax = 0;
  let sumOf = 0;
  // while b is less than array length
  while (b < array.length && a < b) {
    // set sumOf to zero
    sumOf = 0;
    // iterate for 'number' of elements by for loop through a to b
    for (let i = a; i <= b; i++) {
      // get sum of all elements from at index a to b of array
      sumOf += array[i];
    }
    // if sumOf > currentMax, set currentMax to sumOf
    currentMax = Math.max(currentMax, sumOf);
    a++;
    b++;
  }
  // return currentMax
  return currentMax;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 0], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
