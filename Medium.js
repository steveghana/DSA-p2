//Longest substring without repeating characters
function longSubString(str) {
  let highTestCount = 0;
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (!hash.hasOwnProperty(str[i])) {
      hash[str[i]] = str[i];
      console.log(hash);
    } else {
      let lengthOfKeys = Object.keys(hash).length;
      if (lengthOfKeys > highTestCount) highTestCount = lengthOfKeys;
      hash = {};
      hash[str[i]] = str[i];
    }
  }
  console.log(hash);
  console.log(highTestCount);
}
// longSubString("pwwkew");

function longestPalindromSub(str) {
  let highTestCount = 0;
  let char = "";
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash.hasOwnProperty(str[i])) {
      let lengthOfKeys = Object.keys(hash);
      let sliced = lengthOfKeys
        .slice(lengthOfKeys.indexOf(str[i]))
        .concat(str[i]);
      if (sliced[0] === str[i]) {
        if (lengthOfKeys.length > highTestCount)
          highTestCount = lengthOfKeys.length;
        char = sliced.join(" ");
        hash = {};
        hash[str[i]] = str[i];
      }
    } else {
      hash[str[i]] = str[i];
    }
  }
  console.log(char);
}
// longestPalindromSub("babad");

function intToRoman(num) {
  let nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let Roma = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let sum = [];
  for (let i = 0; i < nums.length; i++) {
    if (num >= nums[i]) {
      return Roma[i] + intToRoman(num - nums[i]);
    }
  }
  return "";
}
console.log(intToRoman(47));

/*  round to 85 (85 - 84 is less than 3)
 do not round (result is less than 40)
 do not round (60 - 57 is 3 or higher) */
function gradingStudents(grades = []) {
  // Write your code here
  let results = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      results.push(grades[i]);
    } else if (Math.round(grades[i] / 5) * 5 > grades[i]) {
      let rounded = Math.round(grades[i] / 5) * 5; // to the nearest 5
      let deducted = rounded - grades[i];
      results.push(deducted === 3 ? grades[i] : rounded);
    } else {
      results.push(grades[i]);
    }
  }
  let sorted = results.sort((a, b) => a + b);
  console.log(sorted);
  return sorted;
}

function stones(nums = []) {
  let sort = nums.sort((a, b) => a - b);
  nums = sort;
  let result = null;
  if (nums.length === 1) {
    result = nums;
  } else {
    while (nums.length > 1) {
      let higher = Math.max(sort[sort.length - 1], sort[sort.length - 2]);
      let lowest = Math.min(sort[sort.length - 1], sort[sort.length - 2]);
      let total = higher - lowest;
      let newArray = nums.slice(0, nums.length - 2);
      nums = newArray;
      result = [total === 0 ? 1 : total].concat(newArray);
    }
  }
  console.log(result);
  return result;
}

// stones([2, 7, 4, 1, 8, 1]);

function atoi(input) {
  let result = null;
  let trimed = input.trim();
  if (trimed[0] !== "-" && !Number.isInteger(parseInt(trimed[0]))) {
    result = 0;
  } else {
    let justNums = [];
    for (let i = 0; i < trimed.length; i++) {
      if (trimed[i] === "-" || Number.isInteger(parseInt(trimed[i]))) {
        justNums.push(trimed[i]);
      }
    }
    let joined = justNums.join("");
    // if (Number(joined) < Number.MIN_VALUE) {
    //   result = Number.MIN_VALUE - Number(joined);
    //   console.log(joined);
    // } else if (Number(joined) > Number.MIN_VALUE) {
    //   result = Number(joined) - Number.MIN_VALUE;
    // }
    // else {
    result = joined;
    // }
  }
  console.log(Number.POSITIVE_INFINITY);
}

atoi("493 with words");
function maxArea(nums) {
  let maxArea = 0,
    startIndex = 0,
    endIndex = 0;
  while (startIndex < endIndex) {
    maxArea = Math.max(
      maxArea,
      Math.min(nums[i], nums[endIndex]) * (endIndex - 1)
    );
    if (nums[startIndex] < nums[endIndex]) {
      startIndex++;
    } else {
      endIndex--;
    }
  }
  console.log(maxArea);
}

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
//3sum
function sum(nums = []) {
  let sorted = nums.sort((a, b) => a - b);
  let combination = [];
  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] > 0) {
      break;
    }
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }
    let firstindex = i + 1;
    let endIndex = sorted.length - 1;
    while (firstindex < endIndex) {
      if (sorted[endIndex] + sorted[firstindex] > 0) {
        break;
      }
      if (firstindex > i + 1 && sorted[firstindex] === sorted[firstindex - 1]) {
        firstindex++;
        continue;
      } else {
        if (endIndex === 0) {
          items.push("");
        }
      }
      endIndex--;
      combination.push(items);
    }
    if (sorted[i] + sorted[firstindex] + sorted[endIndex] < 0) {
      firstindex++;
    } else if (sorted[i] + sorted[firstindex] + sorted[endIndex] > 0) {
      endIndex--;
    } else {
      combination.push([sorted[i], sorted[firstindex], sorted[endIndex]]);
      firstindex++;
      endIndex--;
    }
  }
  console.log(combination);
}
// sum([-1, 0, 1, 2, -1, -4]);

//3sum closest
function phoneComb(str = "") {
  let combination = [];
  let letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  if (str.length === 0) return;
  if (str.length === 1 && letters.hasOwnProperty(str)) {
    combination = [...letters[str].split(",")];
  } else if (str.length > 1) {
    for (let i = 0; i < letters[str[0]].length; i++) {
      for (let x = 0; x < letters[str[1]].length; x++) {
        let string = letters[str[0]][i].concat(letters[str[1]][x]);
        combination.push(string);
      }
    }
  }
  console.log(combination);
}
//kangaroo
function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let result = v2 < v1 && (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
  console.log(result);
  return result;
}
// phoneComb("27");

class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(data = []) {
    let splitData = data.split("->");

    for (let i = 0; i < splitData.length; i++) {
      let node = new LinkedListNode(splitData[i], this.head);
      this.head = node;
      this.size++;
    }
  }
  removeAtIndex(index) {
    let current = this.head;
    let prev;
    let count = 0;
    while (count < index) {
      prev = current;
      current = current.next;

      count++;
    }
    current.next = current;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
// let list = new LinkedList();
// let item = "1->2->3->4->5";
// list.add(item);
// list.print();

function findRivers(str) {
  let lengthOfsingleArray = str[0].length;
  const flattenArray = (arr) => {
    let newArray = [];
    for (let x = 0; x < arr.length; x++) {
      if (Array.isArray(arr[x])) {
        newArray = newArray.concat(flattenArray(arr[x]));
      } else {
        newArray.push(arr[x]);
      }
    }
    return newArray;
  };
  let arr = flattenArray(str);
  console.log(lengthOfsingleArray);

  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    const sequence = (count) => {
      if (count >= arr.length) return;
      if (arr[count] === "1" && arr[count + 1] === "1") {
        if (!hash.hasOwnProperty(count)) {
          hash[count] = arr[count];
        }
        if (!hash.hasOwnProperty(count + 1)) {
          hash[count + 1] = arr[count + 1];
        }
        sequence(count + lengthOfsingleArray);
        sequence(count + 1);
      }
      if (arr[count] === "1" && arr[count + lengthOfsingleArray] === "1") {
        if (!hash.hasOwnProperty(count)) {
          hash[count] = arr[count];
        }
        if (!hash.hasOwnProperty(count + lengthOfsingleArray)) {
          hash[count + lengthOfsingleArray] = arr[count + lengthOfsingleArray];
        }
        sequence(count + lengthOfsingleArray);
        sequence(count + 1);
      } else {
        sequence(count + 1);
      }
    };
    sequence(0);
  }
  console.log(hash);
}

let rivers = [
  ["0", "0", "0", "1", "0"],
  ["1", "0", "1", "0", "0"],
  ["0", "0", "1", "0", "1"],
  ["0", "0", "1", "1", "0"],
  ["1", "0", "1", "1", "0"],
];
// findRivers(rivers);

function reverseMatrix(arr = []) {
  let newArray = [];
  let isResult = null;
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let x = arr.length - 1; 0 <= x; x--) {
      temp.push(arr[x][i]);
    }
    console.log(temp);
    newArray.push(temp);
  }
  isResult = newArray;
  return isResult;
}
let num = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// reverseMatrix(num);

function getTotalX(a = [], b = []) {
  let s = [];
  let isdivisible = false;
  if (a[1] % a[0] === 0) {
    s.push(0);
    isdivisible = true;
  }
  let nums = [];
  let highcout = [];
  let hash = {};
  if (isdivisible && b[0] % a[1] === 0) {
    let firstNum = b[0];
    nums.push(firstNum);
    while (firstNum > a[1]) {
      firstNum = firstNum - a[1];
      nums.push(firstNum);
    }
    for (let i = 0; i < b.length; i++) {
      for (let x = 0; x < nums.length; x++) {
        if (b[i] % nums[x] === 0) {
          hash[nums[x]] = (hash[nums[x]] || 0) + 1;
        } else {
          highcout.push(nums[x]);
        }
      }
    }
  }
  if (highcout.length) {
    for (let j = 0; j < highcout.length; j++) {
      delete hash[highcout[j]];
    }
  }
  console.log(Object.keys(hash).length);
}

// getTotalX([2, 4], [16, 32, 96]);
function lengthOfString(s = "") {
  if (s === null || s.length === 0) {
    return 0;
  }
  let maxDistinct = 2;
  if (s.length < maxDistinct + 1) {
    return s.length;
  }
  let length = 1;
  let hash = {};
  for (let start = 0, end = 0; end < s.length; end++) {
    while (end < s.length) {
      let letter = s.charAt(end);
      hash[letter] = (hash[letter] || 0) + 1;
      if (Object.keys(hash).length > maxDistinct) {
        break;
      }
      if (length < end - start + 1) {
        length = end - start + 1;
      }
      end++;
    }
    while (start <= end && Object.keys(hash).length > maxDistinct) {
      let letter = s.charAt(start);
      let count = hash[letter];
      if (count === 1) {
        delete hash[letter];
      } else {
        hash[letter] = hash[letter] - 1;
      }
      start++;
    }
  }
  return length;
}
// console.log(lengthOfString("eceba"));

function maxWaterContainer(nums) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let maxArea = 0;
  while (startIndex < endIndex) {
    let difference;
    let area =
      (endIndex - startIndex) * Math.min(nums[startIndex], nums[endIndex]);
    maxArea = Math.max(maxArea, area);
    if (nums[startIndex] < nums[endIndex]) {
      startIndex++;
    } else {
      endIndex--;
    }
  }
  console.log(maxArea);
}
let input = [1, 5, 4, 3];
// maxWaterContainer(input);

function flip(nums) {}
let finput = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1];

// flip(finput);
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  console.log(total);
}
// factorial(25)

const pointValue = (word = [], tile = []) => {
  const pointsPerTile = {
    a: 1,
    b: 3,
    c: 3,
    t: 1,
    m: 3,
    o: 1,
  };
  const tileHash = {};
  let total = 0;
  for (let index of tile) {
    tileHash[index] = index;
  } //O(n)
  for (let index of word) {
    if (tileHash.hasOwnProperty(index)) {
      total += pointsPerTile[tileHash[index]];
    }
  } //O(n)
  console.log(total);
};

// pointValue("cat", "tmoa_");

let s = "3141592653589793238462643383279";
let bucket = [
  "314",
  "49",
  "9001",
  "15926535897",
  "14",
  "9323",
  "8462643383279",
  "4",
  "793",
];

/* 
for()

*/
const listBucket = (chars = [], listOfcharBuckets) => {
  let count = 0;
  let temp = [];
  let newStartingIndex = 0;
  // console.log(chars)
  while (count < chars.length) {
    for (let i = 0; i < listOfcharBuckets.length; i++) {
      if (chars[count] === listOfcharBuckets[i][0]) {
        let q = [];
        let forwardcount = (stringIndex) => {
          if (stringIndex >= listOfcharBuckets[i].length) return;
          if (
            listOfcharBuckets[i][stringIndex] === chars[count + stringIndex]
          ) {
            q.push(chars[count + stringIndex]);

            forwardcount(stringIndex + 1);
          }
        };
        forwardcount(0);
        if (q.join("") === listOfcharBuckets[i]) {
          count += q.join("").length;
          temp.push(q);
        }
      }
    }
    count++;
  }
  console.log(temp);
};
const removeIslands = (matrix = []) => {
  let newMatrix = [...matrix];
  for (let col = 0; col < matrix.length; col++) {
    for (let rol = 0; rol < matrix[col].length; rol++) {
      if (rol > 0 && rol < matrix[col].length - 2) {
        if (
          matrix[col][rol] === 1 &&
          matrix[col][rol - 1] === 0 &&
          matrix[col][rol + 1] === 0
        ) {
          newMatrix[col].splice(rol, 1, 0);
        }
        if (matrix[col][2] === 1 && matrix[col][2 + 1] === 1) {
          newMatrix[col].splice(2, 1, 0);
          newMatrix[col].splice(2 + 1, 1, 0);
        }
      }
    }
  }
  console.log(newMatrix);
};
let items = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];
// removeIslands(items);
const jumpGame = (int = []) => {
  let prevSteps = 0;
  let result;
  let found = false;
  for (let i = 0; i < int.length; i++) {
    if (found) return result;
    let count = 0;
    let steps = i;
    while (steps < int.length - 1) {
      count++;
      steps++;
      if (steps === int.length - 1) {
        if (int[i] === count) {
          result = 1 + prevSteps;
          found = true;
        }
      }
    }
    prevSteps++;
  }
  return result;
};
// console.log(jumpGame([4, 3, 1, 1, 4]));

const findMinOperations = (nums = [], target) => {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let result = null;
  let count = 0;
  while (!result) {
    let total = 0;
    const newSplice = nums.slice(startIndex, endIndex + 1);
    for (let i = 0; i < newSplice.length; i++) {
      total += newSplice[i];
    }
    if (total > target) {
      if (nums[startIndex] === 1) {
        startIndex++;
      } else {
        endIndex--;
      }
      count++;
    } else if (total < target) {
      result = -1;
      return result;
    } else if (total === target) {
      result = count;
      return result;
    }
  }
  return result;
};
// console.log(findMinOperations([1, 0, 1, 0, 0, 0], 3));

let findsum = (nums = [], k) => {
  let partialTotal = 0;
  let lastKthel = 0;
  for (let index = 0; index < nums.length; index++) {
    if (index >= nums.length - k) {
      lastKthel += nums[index];
    }
    partialTotal += nums[index];
  }

  console.log(partialTotal + lastKthel);
};

// function fourSum(target, nums = []) {}

let solution = (a = []) => {
  let b = [...a];
  for (let i = 0; i < a.length; i++) {
    if (a[i - 1] === undefined) {
      b[i] = 0 + a[i + 1] + a[i];
    } else if (a[i + 1] === undefined) {
      b[i] = a[i - 1] + a[i] + 0;
    } else {
      b[i] = a[i - 1] + a[i] + a[i + 1];
    }
  }
  return b;
};
// console.log(solution([4, 0, 1, -2, 3]));
const findLargeOccurance = (a = []) => {
  let arrayStrings = [];
  let hash = {};
  let highcount = 0;
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let string = String(a[i]);
    if (string.length > 1) {
      arrayStrings = arrayStrings.concat(string.split(""));
      let split = string.split("");
      for (let j = 0; j < split.length; j++) {
        hash[split[j]] = (hash[split[j]] || 0) + 1;
      }
    } else {
      arrayStrings.push(string);
      hash[string] = (hash[string] || 0) + 1;
    }
  }
  let highest = Math.max(...Object.values(hash));
  let keys = Object.keys(hash);
  for (let i = 0; i < keys.length; i++) {
    if (hash[keys[i]] === highest) {
      result.push(keys[i]);
    }
  }
  console.log(result.sort((a, b) => a - b));
};
// findLargeOccurance([25, 2, 3, 57, 38, 41]);

function fourSum(nums = [], target) {
  let result = [];
  if (nums === null || nums.length < 4) {
    return [];
  }
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 3; i++) {
    if (sorted[i] === sorted[i - 1]) {
      continue;
    }
    for (let j = 0; j < sorted.length - 2; j++) {
      if (sorted[j] === sorted[j - 1]) {
        continue;
      }

      let twoSum = target - sorted[i] + sorted[j]; //two sum
      if (twoSum < target) {
        let high = sorted.length - 1;
        let low = 0;
        console.log(twoSum);

        // while (low < high) {
        //   if (low > 0 && sorted[low] === sorted[low - 1]) {
        //     continue;
        //   }
        //   if (high < sorted.length - 1 && sorted[high] === sorted[high + 1]) {
        //     continue;
        //   }
        //   if (sorted[low] + sorted[high] < twoSum) {
        //     low++;
        //   } else if (sorted[high] + sorted[low] > twoSum) {
        //     high--;
        //   } else {
        //     result.push([sorted[i], sorted[j], sorted[low], sorted[high]]);
        //     low++;
        //     high--;
        //   }
        // }
      }
    }
  }
  console.log(result);
}
// fourSum([1, 0, -1, 0, -2, 2], 0);

function letterComb(str = "") {
  let letterMapping = {
    0: "",
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let total = [];
  for (let x = 0; x < str.length; x++) {
    for (let i = 0; i < letterMapping[2].length; i++) {
      for (let j = 0; j < letterMapping[3].length; j++) {
        total.push(letterMapping[2][i] + letterMapping[3][j]);
      }
    }
  }

  console.log(total);
}
// letterComb("23");

let hashMap = (queryMethod = [], queryitems = []) => {
  let hash = {};
  for (let i = 0; i < queryMethod.length; i++) {
    if (queryMethod[i] === "insert") {
      hash[queryitems[i][0]] = queryitems[i][1];
    }
    if (queryMethod[i] === "addToValue") {
      for (let index in hash) {
        if (index !== null) {
          hash[index] = hash[index] + queryitems[i][0];
        }
      }
    }
    if (queryMethod[i] === "addToKey") {
      let keys = Object.keys(hash);
      if (hash[keys.length - 1] !== null) {
        hash[keys.length + 1] = null;
      }
      let newKeys = Object.keys(hash);
      let trackback = (current) => {
        hash[newKeys[current]] = hash[newKeys[current - 1]];
        if (current <= 0) return;
        trackback(current - 1);
      };
      trackback(Object.keys(hash).length - 1);
    }
    if (queryMethod[i] === "get") {
      let result = hash[queryitems[i]];
      console.log(result);
    }
  }
  console.log(hash);
};
let type = ["insert", "insert", "addToValue", "addToKey", "get"];
let item = [[1, 2], [2, 3], [2], [1], [3]];
// hashMap(type, item);

const convertPaypalString = (string = "", rows) => {
  let newArray = "";
  for (let i = 0; i < rows; i++) {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      let steps = (rows + 2) * count + i;
      if (string[steps] && steps < string.length) {
        if (i === 2) {
          newArray += string[steps];
          if (i > 0 && string[steps + 2]) {
            newArray += string[steps + 2];
          }
          count++;
        } else if (i === 3) {
          newArray += string[steps];
          count++;
        } else {
          if (i > 0 && string[steps - 2]) {
            newArray += string[steps - 2];
          }
          newArray += string[steps];
          count++;
        }
      }
    }
    newArray += "\n";
  }
  console.log(newArray);
};
// convertPaypalString("PAYPALISHIRING", 4);
