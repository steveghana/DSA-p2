const calPoint = (ops) => {
  let result = null;
  let newArray = [...ops];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
      newArray.splice(i - 1, 1);
    } else if (ops[i] === "D") {
      const searchNum = (index) => {
        if (Number.isInteger(parseInt(newArray[index - 1]))) {
          let stringToNum = parseInt(newArray[index - 1]);
          let leftArray = newArray.slice(0, index);
          let rightArray = newArray.slice(index);
          let num = stringToNum * 2;
          leftArray.push(String(num));
          newArray = leftArray.concat(rightArray);
          return;
        } else {
          searchNum(index - 1);
        }
      };
      searchNum(newArray.indexOf("D"));
    } else if (ops[i] === "+") {
      let total = 0;
      let numstoAdd = [];
      const addPrev = (count) => {
        let number = parseInt(newArray[count]);
        if (numstoAdd.length === 2) {
          let [a, b] = numstoAdd;
          total += a + b;
          return;
        } else {
          if (Number.isInteger(number)) numstoAdd.push(number);
          addPrev(count - 1);
        }
      };
      addPrev(newArray.length - 1);
      newArray.push(total);
    }
  }
  let newTotal = 0;
  for (let x = 0; x < newArray.length; x++) {
    if (Number.isInteger(parseInt(newArray[x]))) {
      newTotal += parseInt(newArray[x]);
    }
  }
  result = newTotal;

  return result;
};

let case2 = ["5", "-2", "4", "C", "D", "9", "+", "+"];
let case1 = ["5", "2", "C", "D", "+"];
console.log(calPoint(case2));

//MOst repeated character
const input1 = "abcddefde1122334455667";
const input2 = "AABABBDBDBcccBaaBwOBOBW12312124";

const s = (input = []) => {
  let highTestChar = null;
  let highTestCount = 0; //finding occurance of a list of arr elements
  let characterDic = {};
  for (let i = 0; i < input.length; i++) {
    const char = Number(input[i]);
    const wordChar = input[i];
    if (!Number.isInteger(char)) {
      characterDic[wordChar] = (characterDic[wordChar] || 0) + 1; //Hash map
      if (characterDic[wordChar] > highTestCount) {
        highTestCount = characterDic[wordChar];
        highTestChar = wordChar;
      }
    }
  }
  console.log(characterDic);
  return highTestChar;
};
console.log(s(input2));

function compareTriplets(a, b) {
  let s = 1000000001 + 1000000002 + 1000000003 + 1000000004 + 1000000005;

  // scoreArray.push(aliceScore, bobScore);
  return s;
}
let a = [5, 6, 7];
let b = [3, 6, 10];
// console.log(compareTriplets());
