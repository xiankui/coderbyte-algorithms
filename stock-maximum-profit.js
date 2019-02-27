/**
 * Stock maximum profit, find the max profit, return -1 if no profit
 */

// Always compare the current value to the miximum value
function StockPicker(arr) {
  let maxProfit = -1;
  arr.reduce((prev, cur) => {
    const profit = cur - prev;

    // keep the maximum profit
    if (profit > maxProfit) {
      maxProfit = profit;
    }

    // get the miximum
    if (profit > 0) {
      return prev;
    } else {
      return cur;
    }
  });

  return maxProfit;
}

const maxProfit = StockPicker([45, 24, 35, 31, 40, 38, 11]); // 16

// hidden runtime response
window.global = {
  runtimeRes: `<span>StockPicker([45, 24, 35, 31, 40, 38, 11]) is</span> ${StockPicker(
    [45, 24, 35, 31, 40, 38, 11]
  )}`
};
