/**
 * @param {string} s
 * @return {number}
 */
const { longAssAddition, shortAddition } = require('../dummyData/longAssAddition')

// process multi
const processMulti = (numArr, signArr) => {
	const additionArr = []
	additionArr.push(numArr.shift())

	while(numArr.length > 0){
		const sign = signArr.shift()
		const num = numArr.shift()

        // if multi/div
		if(/[*/]/.test(sign)){
			let temp = additionArr.pop()
			if(/\*/.test(sign))
				additionArr.push(temp * num)
			if(/\//.test(sign))
				additionArr.push(Math.floor(temp/num))
		}

        // if add/sub
		if(/[+-]/.test(sign)){
			additionArr.push(sign)
			additionArr.push(num)
		}
	}

	return additionArr
}

// process adds
const processAdditions = (arr) => {
	let result = arr.shift()

	for(let i = 1; i < arr.length; i += 2){
		const sign = arr[i-1]
		const num = arr[i]
		if(sign === '+')
			result += num
		else
			result -= num
	}

	return result
}

const separating = 'SEPARATING'
const multi = 'MULTI'
const addition = 'ADDITION'

var calculate = function(s) {

	console.time(separating)
	let numArr = s.match(/[\d]+/g).map(chr => +chr)
	let signArr = s.match(/[+\-*/]/g)
	console.timeEnd(separating)

// PROCESS PRODUCTS
	console.time(multi)
	const additionArr = processMulti(numArr, signArr)
	console.timeEnd(multi)

    // PROCESS ADDITIONS
	console.time(addition)
	const result = processAdditions(additionArr)
	console.timeEnd(addition)

	return result
}

const input1 = '2*3-8-10/2/1'

// console.log('TOTAL 1:', calculate(input1))
console.log('TOTAL 2:', calculate(longAssAddition))