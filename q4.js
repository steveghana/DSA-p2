// You’re given an X decks of N playing cards with few cards missing. The playing cards can be in the form of an array and is shuffled in any order:

// Eg: ["9C", "KS", "AC", "AH", "8D", "4C", "KD", "JC", "7D", "9D", "2H", "7C", "3C", "7S", "5C", "6H", “TH"]

// where: ‘H’,’S’,’D’,’C’ is Hearts, Spades, Diamonds and Clubs

// and ‘A’,’2’,’3’,’4’,’5’,’6’,’7’,’8’,’9’,’T’,’J’,’Q’,’K’ is Ace, 2,3…. Ten, Jack, Queen, King respectively.

// You need to find out how many complete decks can be made from the cards you’ve given in the input.

// Test Cases:

// decksOfCards(["9C", "KS", "AC", "AH", "8D", "4C", "KD", "JC", "7D", "9D", "2H", "7C", "3C", "7S", "5C", "6H", "TH"]) // Output: 0 (No complete decks in this array)
decksOfCards1= ["9C", "KS", "AC", "AH", "8D", "4C", "KD", "JC", "7D", "9D", "2H", "7C", "3C", "7S", "5C", "6H", "TH"]

// decksOfCards(["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD"]) // Output: 2 (2 complete decks in this array)
decksOfCards2=["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD"]

// decksOfCards(["TD", "TC", "6H", "5H", "KC", "JH", "QC", "4S", "2S", "8H", "JD", "2H", "AC", "7D", "6C", "5D", "AD", "TS", "4D", "KH", "3H", "9H", "3S", "2D", "5S", "6S", "AH", "JS", "6D", "9S", "4C", "7C", "8S", "AS", "KD", "7S", "4H", "KS", "7H", "9D", "8D", "3D", "5C", "9C", "QH", "JC", "8C", "TH", "QS", "3C", "QD", "2C"]) // Output: 1
decksOfCards3=["TD", "TC", "6H", "5H", "KC", "JH", "QC", "4S", "2S", "8H", "JD", "2H", "AC", "7D", "6C", "5D", "AD", "TS", "4D", "KH", "3H", "9H", "3S", "2D", "5S", "6S", "AH", "JS", "6D", "9S", "4C", "7C", "8S", "AS", "KD", "7S", "4H", "KS", "7H", "9D", "8D", "3D", "5C", "9C", "QH", "JC", "8C", "TH", "QS", "3C", "QD", "2C"]

// decksOfCards(["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AH"]) // Output: 2
decksOfCards4=["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AH"]

// decksOfCards(["QC", "6D", "KD", "QS", "7S", "5C", "QH", "3H", "AD", "9C", "7H", "QD", "QH", "2S", "AH", "KS", "5D", "QC", "AS", "2D", "6C", "8C", "7D", "8H", "9S", "4D", "6H", "JC", "3S", "4C", "3C", "7S", "KD", "4H", "5C", "7C", "AS", "3D", "7D", "2H", "8S", "2H", "8D", "9S", "3C", "5H", "KS", "8D", "9H", "TH", "2C", "JH", "6D", "KC", "TS", "6S", "TD", "4S", "8S", "5S", "8H", "TD", "9D", "4H", "6C", "7C", "AC", "JC", "JD", "TS", "KH", "2C", "QD", "JS", "QS", "KH", "8C", "3H", "2D", "2S", "3S", "5H", "4S", "9C", "4D", "6H", "JS", "TH", "9H", "TC", "7H", "JH", "TC", "6S", "AD", "AC", "JD", "4C", "5D", "9D", "KC", "3D"]) // Output: 1
decksOfCards5=["QC", "6D", "KD", "QS", "7S", "5C", "QH", "3H", "AD", "9C", "7H", "QD", "QH", "2S", "AH", "KS", "5D", "QC", "AS", "2D", "6C", "8C", "7D", "8H", "9S", "4D", "6H", "JC", "3S", "4C", "3C", "7S", "KD", "4H", "5C", "7C", "AS", "3D", "7D", "2H", "8S", "2H", "8D", "9S", "3C", "5H", "KS", "8D", "9H", "TH", "2C", "JH", "6D", "KC", "TS", "6S", "TD", "4S", "8S", "5S", "8H", "TD", "9D", "4H", "6C", "7C", "AC", "JC", "JD", "TS", "KH", "2C", "QD", "JS", "QS", "KH", "8C", "3H", "2D", "2S", "3S", "5H", "4S", "9C", "4D", "6H", "JS", "TH", "9H", "TC", "7H", "JH", "TC", "6S", "AD", "AC", "JD", "4C", "5D", "9D", "KC", "3D"]

// decksOfCards(["AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH"]) // Output: 0 output should be 3 instead of 0
decksOfCards6=["AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH"]

const findCompleteDeckOfCards = (decksOfCards) => {
  let fullHouse = ["A","2","3","4","5","6","7","8","9","T","J","Q","K",];
  let cards = [];
  let count = 0;
//checking if the fullhouse digits exist in decks
  const checkIfDigitsExist = (number) => {
    if (number > fullHouse.length - 1) return;
    let sequenceOfDigits = [];
    decksOfCards.forEach((card) => {
      if (card.includes(fullHouse[number])) {
        sequenceOfDigits.push(card);
      }
    });
    cards.push(sequenceOfDigits);
    return checkIfDigitsExist(number + 1);
  };
  checkIfDigitsExist(count);
  const minNumOfSequence = 4;
  const finalValue = [];
  //checking how many time a single entity occurs
  // const occurance = cards.reduce((prev, current) => {
  //   return (prev[current] = ++prev[current] || 1), prev;
  // }, {});
  // console.log(cards)
  const checkIfMinSequenceExist = () =>
    cards.forEach((item) => {
      if (item.length < minNumOfSequence) {
        finalValue.push(0);
        return 0;
      } else if (item.length === minNumOfSequence) {
        const value = item.length / minNumOfSequence;
        finalValue.push(value);
        return item.length / minNumOfSequence;
      } else if (item.length % minNumOfSequence === 0) {
        const value = item.length / minNumOfSequence;
        finalValue.push(value);
        return value;
      } else if (item.length % minNumOfSequence !== 0) {
        const remainder = item.length - (item.length % minNumOfSequence);
        const value = remainder / minNumOfSequence;
        finalValue.push(value);
        return value;
      } else return;
    });
  checkIfMinSequenceExist();
  console.log(finalValue[0]);
};

findCompleteDeckOfCards(decksOfCards1);
findCompleteDeckOfCards(decksOfCards2);
findCompleteDeckOfCards(decksOfCards3);
findCompleteDeckOfCards(decksOfCards4);
findCompleteDeckOfCards(decksOfCards5);
findCompleteDeckOfCards(decksOfCards6);
