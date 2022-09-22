function prepend(arr = [], k) {
  if (arr.length < 1) return;
  if (k > arr.length || k <= 0) return;
  if (arr.length < 2) return arr;
  let leftSubArray = [];
  let rightSubArray = [];
  // let result = null;
  for (let i = 0; i < arr.length; i++) {
    if (i >= k - 1) {
      leftSubArray.push(arr[i]);
    } else {
      rightSubArray.push(arr[i]);
    }
  }
  console.log(leftSubArray.concat(rightSubArray));
}
// prepend(nums, 5);

const getTimer = (nums, timezone, minutes, stringrep) => {
  let timestring = "";
  if (nums > 59) {
    let remainder = nums % timezone;
    let actualtime = (nums - remainder) / timezone;
    let hours = minutes * 60;
    let day = hours * 24;
    let week = day * 7;
    let month = day * 31;
    let year = month * 12;
    let timezoneStringRep = actualtime > 1 ? stringrep + "s" : stringrep;
    let timeExtra = "";
    let stringTimeFormat = [];
    if (remainder) {
      let findRemainder = (remainder) => {
        let remaining;
        let calculateTime = (moment, str) => {
          remaining = remainder % moment;
          let actual = (remainder - remaining) / moment;
          stringTimeFormat.push(actual + `${actual > 1 ? str + "s" : str}`);
          remainder += remaining;
        };
        if (remainder < 60) {
          if (remainder > 0) stringTimeFormat.push(remainder + `s`);
          return;
        }
        if (remainder >= day && remainder < week) {
          calculateTime(day, "d");
        }
        if (remainder > week && remainder < month) {
          calculateTime(week, "w");
        }
        if (remainder > month && remainder < year) {
          calculateTime(month, "mnt");
        }
        if (remainder >= hours && remainder < day) {
          calculateTime(hours, "hr");
        }
        if (remainder >= minutes && remainder < hours) {
          calculateTime(minutes, "m");
        }
        findRemainder(remaining);
      };
      findRemainder(remainder);
      let timesequense = stringTimeFormat.sort((a, b) => b - a);
      for (let i = 0; i < timesequense.length; i++) {
        if (timesequense[i] !== 0) timeExtra += timesequense[i];
      }
    }
    timestring = `${actualtime}${timezoneStringRep}${timeExtra}`;
  } else {
    timestring = `${nums}s`;
  }
  return timestring;
};
const calcTimer = (nums) => {
  let minutes = 60;
  let hour = minutes * 60;
  let day = hour * 24;
  let week = day * 7;
  let month = day * 31;
  let year = month * 12;
  let timer;
  if (nums >= hour && nums < day) {
    timer = getTimer(nums, hour, minutes, "hr");
  }
  if (nums >= minutes && nums < hour) {
    timer = getTimer(nums, minutes, minutes, "m");
  }
  if (nums >= day && nums < week) {
    timer = getTimer(nums, day, minutes, "d");
  }
  if (nums >= week && nums < month) {
    timer = getTimer(nums, week, minutes, "w");
  }
  if (nums >= month && nums < year) {
    timer = getTimer(nums, month, minutes, "mnt");
  }
  if (nums >= year) {
    timer = getTimer(nums, year, minutes, "yr");
  }
  if (nums <= 59) {
    timer = getTimer(nums, minutes, minutes, "s");
  }
  return timer;
};

// console.log(calcTimer(210));

function arrayChallenge(string = "") {
  let seperatedWords = string[1].split(",");
  for (let i = 0; i < string[0].length; i++) {
    let current = string[0].slice(0, i + 1);
    let rest = string[0].slice(i + 1);
    if (seperatedWords.includes(current) && seperatedWords.includes(rest)) {
      console.log(current, rest);
    }
  }
}
// arrayChallenge(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]);

function search(str = []) {
  let hash = {};
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let key = str[i].split(":")[0];
    let value = str[i].split(":")[1];
    if (hash.hasOwnProperty(key)) {
      hash[key] = Number(hash[key]) + Number(value);
    } else {
      hash[key] = Number(value);
    }
  }
  let newKeyvalues = Object.keys(hash);
  console.log(newKeyvalues);
  if (newKeyvalues[0] > newKeyvalues[1]) {
  } else {
    newKeyvalues = Object.keys(hash);
  }
  let highest = Number.MIN_VALUE;
  for (let j = 0; j < newKeyvalues.length; j++) {
    if (hash[newKeyvalues[j]] > 0) {
      let stringrep = `${newKeyvalues[j]}:${hash[newKeyvalues[j]]}`;
      // if (hash[newKeyvalues[j]] > highest) {
      // highest = hash[newKeyvalues[j]];
      result.push(stringrep);
      // } else {
      //   result.unshift(stringrep);
      // }
    }
  }
  console.log(result.join(","));
}
search(["B:-1", "A:1", "B:3", "A:5"]);
