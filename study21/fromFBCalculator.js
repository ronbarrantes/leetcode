const { basicTest: test } = require('../utils/basicTest')

const split = (str) => {
	const arr = []
	let numBuilder = ''

	for(const item of str){
		if(/\d/.test(item))
			numBuilder+=item

		if(/[*+]/.test(item)){
			arr.push(+numBuilder)
			arr.push(item)
			numBuilder = ''
		}
	}
	arr.push(+numBuilder)
	return arr
}

const operation = (arr) => {
	const sumsArr = []
	let shouldMultiply = false
	for(const item of arr){
		if(item === '*')
			shouldMultiply = true

		if(item === '+')
			shouldMultiply = false

		if(/\d/.test(item) && !shouldMultiply)
			sumsArr.push(item)

		if(/\d/.test(item) && shouldMultiply){
			const lastItem = sumsArr.length-1
			sumsArr[lastItem] = sumsArr[lastItem] * item
		}
	}

	return sumsArr.reduce((prev, next) => prev + next, 0)
}

const calculator = (str) => {
    // get the numbers and signs
	const splitted = split(str)

    // add and multiply the stuff
	return operation(splitted)
}

const inputs = [
	{ input: '1+3*5+2', answer: 18 },
	{ input: '10 + 3 * 5 + 2', answer: 27 },
	{ input: '2', answer: 2 },
	{ input: '3*1+2+3', answer: 8 },
	{ input: '3*5+8+15*3+2', answer: 70 },
]

for(const item of inputs){
	test(item.input, calculator(item.input), item.answer)
}
