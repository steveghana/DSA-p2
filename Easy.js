// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3 2
// 4 5 6 3
// 9 8 9 4
// 9 8 9 5
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input
const newArray = [1, 2, 3, 4, 5, 6, 9, 8, 9];
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x

function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][arr[i].length - i - 1];
  }
  let num = leftDiagonal - rightDiagonal;
  return Math.abs(num);
}
// console.log(calculateDiff(newArray));

let input1 = "{}";
let input2 = "()[]{}";
let input3 = "{]";
let input4 = "{[}]";

const matchingParenteses = (char = []) => {
  let hashParenteses = { "{": "}", "(": ")", "[": "]" };
  let stack = [];
  if (!char.length) return;
  for (let i = 0; i < char.length; i++) {
    if (hashParenteses[char[i]]) {
      stack.push(hashParenteses[char[i]]);
    } else if (stack.length > 0 && stack[stack.length - 1] === char[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

// console.log(matchingParenteses(input1));

const miniMaxSum = (num = []) => {
  let sorted = num.sort((a, b) => a + b);
  let findMin = Math.min(...sorted);
  let findMax = Math.max(...sorted);
  let smallTotal = 0;
  let largeTotal = 0;
  let isequal = false;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < findMax) {
      smallTotal += sorted[i];
    }
    if (sorted[i] > findMin) {
      largeTotal += sorted[i];
    }
    if (sorted[i] === findMin && sorted[i] === findMax) {
      smallTotal += sorted[i];
      largeTotal += sorted[i];
      isequal = false;
    }
  }
  let large = isequal ? largeTotal - sorted[0] : largeTotal;
  let small = isequal ? smallTotal - sorted[0] : smallTotal;
  console.log(small, large);
};
let arr = [1, 3, 5, 7, 9];
// miniMaxSum(arr);

const returnIndices = (target, nums) => {
  let indices = [];
  let fixedWindow = 2;
  let maxValue = 0;
  let isTarget = 0;
  let currentRunningSum = 0;
  for (let i = 0; i < nums.length; i++) {
    //sliding window technique O n
    currentRunningSum += nums[i];
    if (i >= fixedWindow - 1) {
      if (currentRunningSum === target) {
        indices.push(nums[i], nums[i - 1]);
        maxValue += Math.max(maxValue, currentRunningSum);
      } else {
        currentRunningSum -= nums[i - (fixedWindow - 1)];
      }
    }
    // console.log(maxValue);
  }
  console.log(maxValue);
  console.log(indices, maxValue);
  // return indices;
};
let t = 9;
let nums = [11, 7, 2, 15];
// returnIndices(t, nums);

// function calcGemStones(arr = []) {
//   let hash = {};
//   let highTestCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let x = 0; x < arr.length; x++) {
//       if (arr[i].includes(arr[x])) {
//         console.log(arr[i]);
//         // hash[arr[i]] = (hash[arr[i]] || 0) + 1;
//         // if (hash[arr[i]] > highTestCount) {
//         //   highTestCount = hash[arr[i]];
//         // }
//       }
//     }
//   }
// }
// let arrNums = ["abc", "bc", "abc"];

// calcGemStones(arrNums);

const findSum = (arr = [], target) => {
  const hash = {};
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    //O n
    hash[String(arr[i])] = arr[i];
    if (hash[String(target - arr[i])]) {
      pairs.push([arr[i], hash[String(target - arr[i])]]);
    }
  }
  console.log(pairs);
};
let target = 11;
let num = [1, 4, 9, 5, 5, 5, 6, 6, 1, 1];
// findSum(num, target);

const wordPattern = (pattern, str) => {
  if (pattern === "" || str === "") return false;
  let arrString = str.split(" "); // "dog cat cat dog" to [ 'dog', 'cat', 'cat', 'dog' ]
  if (arrString.length !== pattern.length) return false;
  let patternHash = {};
  let wordHash = {};
  for (let i = 0; i < arrString.length; i++) {
    if (
      !patternHash.hasOwnProperty(pattern[i]) &&
      !wordHash.hasOwnProperty(arrString[i])
    ) {
      patternHash[pattern[i]] = arrString[i];
      wordHash[arrNums[i]] = true;
    } else {
      if (patternHash[pattern[i]] !== arrString[i]) {
        return false;
      }
    }
  }
  console.log(patternHash, wordHash);
  return true;
};

let pattern = "abba";
let string = "dog cat cat dog";
// wordPattern(pattern, string);

function twoSum(num = [], target) {
  let startIndex = 0;
  let endingIndex = 0;
  let index = [];
  let result = null;
  while (result !== target) {
    let ifAdded = num[startIndex] + num[endingIndex];
    if (ifAdded === target) {
      result = num[startIndex] + num[endingIndex];
      index = [num[startIndex], num[endingIndex]];
    } else if (ifAdded > target) {
      endingIndex--;
    } else if (ifAdded < target) {
      startIndex++;
    }
  }
  console.log(result, index);
}
twoSum([2, 7, 11, 15], 9);

//
function reverseInt(nums) {
  let count = 0;
  while (nums != 0) {
    count = count * 10 + (nums % 10);
    nums /= 10;
  }
  if (count > Number.MAX_VALUE || count < Number.MIN_VALUE) return 0;

  console.log(count);
}
reverseInt(123);
