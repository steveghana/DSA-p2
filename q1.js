// Input is an array of Integers which denotes the stock value of company X.

// Ex : [1,5,6,7,34,10]

// In this case :
// 1 is the stock value of company X on Day 0.
// 5 is the stock value of company X on Day 1.
// ...
// 10 is the stock value of a comany X on Day 5.

// You need to find the day where I can buy the stock and day where I can sell the stock to get the max profit :

// In the above case, If I buy the stock at Day 0 (i.e when the value is 1) and sell on Day 4 (when the value is 34). I get the max profit. Profit = 34-1 = 33. So, the output for the above example should be [0,4] (i.e [buy-day, sell-day])

// If there is a test case in which any profit is not possible, Print [0,0] (i.e: you're buying and selling the stock on the same day)

// Test Cases :
// [200, 1,5,6,7,34,10]
// [1,5,6,7,34,10,300]
// [10,1,5,6,7,34,10,20]
// [2,200,1,0,10]
// [7,10]
// [1] //Output: [0,0] You buy and sell on the same day because there's only one number.

// If an emty array or null is passed as an input return [-1,-1].

const calcStockMaxProfit = (stockValue) => {
  let stockDaysIndex = [];
  const minNum = Math.min(...stockValue);
  const maxNum = Math.max(...stockValue);
  const profitFromSale = maxNum - minNum;
  const dayToBuyStock = stockValue.indexOf(minNum);
  const dayToSellStock = stockValue.indexOf(maxNum);
  stockDaysIndex.push(dayToBuyStock, dayToSellStock);
  console.log(
    `[${stockDaysIndex}] where day ${stockDaysIndex[0]} is the day to buy stock and day ${stockDaysIndex[1]} is the day to sell. Profit: ${maxNum} - ${minNum} = ${profitFromSale} `
  );
};
calcStockMaxProfit([1, 5, 6, 7, 34, 10]);
calcStockMaxProfit([200, 1, 5, 6, 7, 34, 10]);
calcStockMaxProfit([1, 5, 6, 7, 34, 10, 300]);
calcStockMaxProfit([10, 1, 5, 6, 7, 34, 10, 20]);
calcStockMaxProfit([2, 200, 1, 0, 10]);
calcStockMaxProfit([7, 10]);
calcStockMaxProfit([1]);
