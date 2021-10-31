var maxProfit = function(prices) {
	let profit = 0
	let buy = null
	let sell = null
	for (let i = 0; i < prices.length; i++) {

		// when to buy
		if (prices[i] < prices[i + 1] && buy === null) {
			buy = prices[i]
		}
		// update sell
		if (i !== 0) {
			sell = prices[i]
		}

		if (prices[i] > prices[i + 1] && i !== 0 && i !== prices.length - 1 && typeof buy === 'number') {
			profit += sell - buy
			buy = null
			sell = null
		}

		// last run
		if (i === prices.length - 1 && typeof buy === 'number') {
			profit += sell - buy
		}
	}

	return profit
}

var maxProfit2 = function(prices) {
	let max = 0
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
			max += prices[i] - prices[i - 1]
		}
	}
	return max
}

let price1 = [7, 1, 4, 5, 3, 6, 4]
let price2 = [1, 2, 3, 4, 5]
let price3 = [2, 1, 2, 0, 1]
let price4 = [7, 6, 4, 3, 1]

console.log(maxProfit2(price1))
console.log(maxProfit2(price2))
console.log(maxProfit2(price3))
console.log(maxProfit2(price4))