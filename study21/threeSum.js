/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const assert = require('assert').strict

var threeSum = function(nums) {
	const result = []

	if(nums.length <= 2)
		return result

	nums = nums.sort((a, b) => a - b)

	// iterate over the array

	for(let i = 0; i < nums.length; i++){
		let lo = i + 1
		let hi = nums.length - 1

		if (i === 0 || nums[i - 1] !== nums[i]){
			while(lo < hi){
				const sum = nums[i] + nums[lo] + nums[hi]
				const arrNums = [nums[i], nums[lo], nums[hi]]

				if(sum < 0)
					lo++
				else if(sum > 0)
					hi--
				else{
					result.push(arrNums)
					lo++
					hi--
					while(lo < hi && nums[lo] === nums[lo - 1]){
						lo++
					}
				}
			}
		}
	}

	return result
}

const a = [-1, 0, 1, 2, -1, -4]
const b = [0, 0, 0, 0]
const c = [-2, 0, 1, 1, 2]
const d = [0, 0]

threeSum(a) //?
threeSum(b) //?
threeSum(c) //?
threeSum(d) //?

assert.deepStrictEqual(threeSum(a), [[-1, -1, 2], [-1, 0, 1]], `They're not equal`)
assert.deepStrictEqual(threeSum(b), [[0, 0, 0]], 'Need all zeros')
assert.deepStrictEqual(threeSum(c), [[-2, 0, 2], [-2, 1, 1]], 'Is not right')