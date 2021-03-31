/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	const productArr = [0]
	for(let i = 0; i < num1.length; i++){
		const currNum1Pos = num1.length - 1 - i

		for(let j = 0; j < num2.length; j++){
			const currNum2Pos = num2.length - 1 - j
			const currIndex = i + j

			let currProduct = (+num1[currNum1Pos] * +num2[currNum2Pos]) + (productArr[currIndex] || 0)
			let carry = Math.floor(currProduct / 10)
			currProduct = currProduct - (carry * 10)

			if (carry !== 0)
				productArr.push(carry)

			productArr[currIndex] = currProduct
			console.log(currProduct)
		}
	}

	return productArr.reverse().join('')
}

const num1 = '1001'
const num2 = '454'

const sol1 = (+num1 * +num2).toString()

const product = multiply(num1, num2)

console.log(`${product} === ${sol1}`, product === sol1)