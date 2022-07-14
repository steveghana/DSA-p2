// Flatten this array out : [1,2,[3,4,[5,6],7,[8,9]]]
// Output should be [1,2,3,4,5,6,7,8,9]

// You can ONLY use arr.push(), arr.concat() as library / array functions. Please don't use any other library or array functions.
const flattenArray = (arr) => {
  let newArray = [];
  for (index in arr) {
    if (Array.isArray(arr[index])) {
      newArray = newArray.concat(flattenArray(arr[index]));
    } else {
      newArray.push(arr[index]);
    }
  }
  return newArray;
};
console.log(flattenArray([1, 2, [3, 4, [5, 6], 7, [8, 9]]]));
