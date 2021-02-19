/**
 * @param {number[]} nums
 * @return {number[]}
 */

const array = require('./randomNumbers')

const merge = (leftList, rightList) => {
	let lPointer = 0
	let rPointer = 0
	let result = []

	while(lPointer < leftList.length && rPointer < rightList.length){
		if (leftList[lPointer] < rightList[rPointer]){
			result.push(leftList[lPointer])
			lPointer ++
		} else {
			result.push(rightList[rPointer])
			rPointer ++
		}
	}

	result = [ ...result,
		...leftList.slice(lPointer),
		...rightList.slice(rPointer),
	]

	return result
}

var sortArray = function(nums) {
	let result = nums.map (num => [num])
	let i = 0

	while (i < result.length - 1) {

		let left = result[i]
		let right = result[i + 1]
		let merged = merge(left, right)
		i++

		result = [...result.slice(0, i-1), merged, ...result.slice(i + 1)]
		if (i >= result.length-1){
			i = 0
		}
	}

	return result[0]
}

console.time('time')
console.log(sortArray(array))
console.timeEnd('time')
