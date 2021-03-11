/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const assert = require('assert').strict

const isNotDup = (arr, res) => {
	const length = arr.length
	if(length === 0) return true

	const a = arr[length-1][0]
	const b = arr[length-1][1]
	const c = arr[length-1][2]

	if(a === res[0] && b === res[1] && c === res[2])
		return false

	return true
}

var threeSum = function(nums) {
	let l = 0
	let c = 1
	let r = nums.length - 1

	const result = []

	if(nums.length <= 1)
		return result

	nums = nums.sort((a, b) => a - b)

	while(l < r){
		if(c === r){
			l++
			c = l + 1
			continue
		}

		const sum = nums[l] + nums[c] + nums[r]
		const arrNums = [nums[l], nums[c], nums[r]]
		const isArrNotDup = isNotDup(result, arrNums)

		if(sum === 0){
			if(isArrNotDup)
				result.push(arrNums)
			l++
			c = l + 1
		}

		if(sum > 0)
			r--

		if(sum < 0){
			c++
		}

	}

	return result
}

const a = [-1, 0, 1, 2, -1, -4]
const b = [0, 0, 0, 0]
const c = [-2, 0, 1, 1, 2]

// assert.deepStrictEqual(threeSum(a), [[-1, -1, 2], [-1, 0, 1]], `They're not equal`)
// assert.deepStrictEqual(threeSum(b), [[0, 0, 0]], 'Need all zeros')
assert.deepStrictEqual(threeSum(c), [[-2, 0, 2], [-2, 1, 1]], 'Is not right')