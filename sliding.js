let input = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
function findMaxSum(arr = [], k) {
  let maxValue = 0;

  let currentRunningSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentRunningSum += arr[i];
    if (i >= k - 1) {
      maxValue = Math.max(maxValue, currentRunningSum);
      currentRunningSum -= arr[i - (k - 1)];
      console.log(currentRunningSum);
    }
  }
  return maxValue;
}

// findMaxSum(input, 3);

//Find smallest sub array >=target
function findSmallSubArray(arr = [], target) {
  let smallSubsize = Number.MAX_VALUE;
  let startingWindow = 0;
  let currentRunningSum = 0;
  for (let endingIndex = 0; endingIndex < arr.length; endingIndex++) {
    currentRunningSum += [arr[endingIndex]];

    // while (currentRunningSum >= target) {
    //   // console.log(currentRunningSum);
    //   smallSubsize = Math.min(smallSubsize, endingIndex - startingWindow + 1);
    //   currentRunningSum -= arr[startingWindow];
    //   startingWindow++;
    // }
  }
  console.log(smallSubsize);
  return smallSubsize;
}
findSmallSubArray(input, 8);
