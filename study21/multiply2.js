/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	const productArr = [0]
	for(let i = num1.length - 1 ; i >=0 ; i--){
		for(let j = num2.length - 1; j >= 0; j--){

			let currProduct = (+num1[i] * +num2[j]) + (productArr[0] || 0)
			let carry = Math.floor(currProduct / 10)
			currProduct = currProduct - (carry * 10)

			productArr[0] = currProduct

			if (carry !== 0)
				productArr.unshift(carry)

			console.log(currProduct)
		}
	}

	return productArr.join('')
}

const num1 = '98'
const num2 = '34'

const sol1 = (+num1 * +num2).toString()

const product = multiply(num1, num2)

console.log(`${product} === ${sol1}`, product === sol1)