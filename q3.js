// You have an array of N strings.

// Eg: [“S>P”,”P>A”,”A>I”,”I>N”]

// You need to combine these strings in an array to form a word.

// OUTPUT:  SPAIN

// Eg 2 : [“E>N”, “P>E”]

// Output: PEN

// Eg 3: [“M>P”,”L>A”,”A>M”]

// Output: LAMP

// Note:
// The strings in an array can be in any random order.
// Eg: [“E>N”, “P>E”] -> PEN
// Assume no letter in any word is repeated (You will never have two same letters in a word in any of the test cases).

const combineToFormWord = (arrOfStrings, wordOutput) => {
  let newArray = [];
  for (i in arrOfStrings) {
    const stringIndex = arrOfStrings[i].split(">");
    newArray.push(stringIndex);
  }
  const flat = newArray.reduce((x, y) => {
    return x.concat(y);
  });
  const output = [];
  for (let i = 0; i < wordOutput.length; i++) {
    if (flat.includes(wordOutput[i])) {
      output.push(wordOutput[i]);
    }
  }
  console.log(output);
  return output;
};
combineToFormWord(["S>P", "P>A", "A>I", "I>N"], "SPAIN");
combineToFormWord(["E>N", "P>E"], "PEN");
combineToFormWord(["M>P", "L>A", "A>M"], "LAMP");
