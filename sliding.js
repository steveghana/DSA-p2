let input = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
function findMaxSum(arr = [], k) {
  let currentActiveSum = 0;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    currentActiveSum += arr[i];
    if (i >= k - 1) {
      //when i = the window size

      max = Math.max(max, currentActiveSum); //compare max

      currentActiveSum -= arr[i - (k - 1)]; //Deduct the farthest left
    }
  }
  return max;
}
console.log(findMaxSum(input, 3));
//Find smallest sub array >=target
function findSmallSubArray(input = [], target) {
  let currentActiveSum = 0;
  let MIN_VALUE = Number.MAX_VALUE;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    currentActiveSum += input[windowEnd];
    while (currentActiveSum >= target) {
      MIN_VALUE = Math.min(MIN_VALUE, windowEnd - windowStart + 1); //Find the smallest winow size
      currentActiveSum -= input[windowStart]; //Deduct the farthest right
      windowStart++; // if the sum of the window size becomes  greater per the condition, increase start index
    }
  }
  return MIN_VALUE;
}
// console.log(findSmallSubArray(input, 8));
