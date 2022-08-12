let arr = [1, 7, 5, 9, 2, 12, 3];
let k = 2;
function coutPairs(input = [], k) {
  let sorted = input.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < sorted.length; i++) {
    if (Math.abs(sorted[i] - sorted[i + 1]) === k) {
      result.push([sorted[i], sorted[i + 1]]);
    } else {
      let count = i;
      while (
        count < sorted.length &&
        Math.abs(sorted[i] - sorted[count + 1]) <= k
      ) {
        let absoluteVal = Math.abs(sorted[i] - sorted[count + 1]);
        if (absoluteVal === k) {
          result.push([sorted[i], sorted[count + 1]]);
        }
        count++;
      }
    }
  }
  return result;
}
// console.log(coutPairs(arr, k));
let A = [12, 27, 35, 40, 49, 55, 59];
let B = [12, 35, 39, 40, 55, 58, 60];
function findCommon(a, b) {
  let items = [];
  let hash = {};
  for (let i = 0; i < b.length; i++) {
    if (a[i] === b[i] || hash.hasOwnProperty(b[i])) {
      items.push(b[i]);
    }
    if (hash.hasOwnProperty(a[i])) {
      items.push(a[i]);
    } else {
      hash[a[i]] = a[i];
      hash[b[i]] = b[i];
    }
  }
  console.log(items);
}

// findCommon(A, B);

const permutation = (element) => {
  if (element.length === 0) return [[]];
  let first = element[0];
  let rest = element.slice(1);

  let permutationWithoutFirst = permutation(rest);
  // console.log(permutationWithoutFirst);
  let allperms = [];
  permutationWithoutFirst.forEach((perm) => {
    for (let i = 0; i < perm.length; i++) {
      console.log(perm[i]);
      let permwithFirst = [...perm.slice(0, i), first, ...perm.slice(i)];
      allperms.push(permwithFirst);
    }
  });
  return allperms;
};
//    console.log(permutation(["a", "b", "c"]));

//swap minimum and max elements in an array
const nums = [12, 27, 35, 40, 49, 55, 59];
function getMinAndIndex(num) {
  let min = num[0];
  let index = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] < min) {
      min = num[i];
      index = i;
    }
  }
  return [min, index];
}
function getMaxAndIndex(num) {
  let max = num[0];
  let index = null;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
      index = i;
    }
  }
  return [max, index];
}
const swapIndexes = (num = []) => {
  //check edge cases
  if (num.length < 2) return num;
  let [min, minIndex] = getMinAndIndex(num);
  let [max, maxIndex] = getMaxAndIndex(num);
  num[minIndex] = max;
  num[maxIndex] = min;
  return num;
};
// console.log(swapIndexes(nums));

let Input = "Mr John Smith";
/* 
Output: "Mr%20John%20Smith" 
*/
function urlLIfy(url = "") {
  let arrOfstrings = url.split(" "); //O(n)
  let diff = "%20";
  for (let i = 0; i < arrOfstrings.length; i++) {
    //O(n)
    if (i < arrOfstrings.length - 1) {
      arrOfstrings[i] = arrOfstrings[i].concat(diff);
    }
  }
  return arrOfstrings.join("");
}
// console.log(urlLIfy(Input));

let strings = "aabcccccaaa";
function stringCompression(str = "") {
  let result = "";
  let current = str[0];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === current) {
      count++;
    } else {
      result += `${current}${count}`;
      current = str[i];
      count = 1;
    }
  }
  return (result += `${current}${count}`);
}
console.log(stringCompression(strings));

function isSubstring(str = "", rev) {
  let isReversed = str.trim().split("").reverse().join("") === rev;
  return isReversed;
}
console.log(isSubstring("waterbottle", "elttobretaw"));

function fizzBuzz(r) {
  let str = "";
  if (r % 5 === 0) str += "fizz";
  if (r % 10 === 0) str += "Buzz";
  return str;
}
console.log(fizzBuzz(40));
