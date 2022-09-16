(async () => {
  const { data } = await axios.get(
    "https://coderbyte.com/api/challenges/json/age-counting"
  );

  let keyValue = data.data.split(",");
  console.log(keyValue);
  let total = [];
  for (let i = 0; i < keyValue.length; i++) {
    let age = keyValue[i].split("=");
    if (age[1] === "32") {
      total.push(keyValue[i - 1].split("=")[1]);
    }
  }
  try {
  } catch (error) {}
  let newStream = fs.createWriteStream("Output.txt");

  newStream.write(`${total.join("\n")}`);
  newStream.end();
  const readFile = fs.readFileSync("Output.txt");
  const shHash = crypto.createHash("sha1");
  shHash.update(readFile);
  const hexCode = shHash.digest("hex");
  const challengeToken = "pg5ktxj6l2";
  parseStringWithToken(hexCode, challengeToken);
  console.log(hexCode);
})();

const parseStringWithToken = (str = "", parser = "") => {
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    if (parser[i]) {
      newArray.push(str[i], parser[i]);
    } else {
      newArray.push(str[i]);
    }
  }
  console.log(newArray);
};
