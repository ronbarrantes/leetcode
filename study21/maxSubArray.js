/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let maxCurr = nums[0]
	let maxGlobal = nums[0]

	for(let i = 1; i < nums.length; i++){
		const currNum = nums[i]
		maxCurr = Math.max(currNum, maxCurr + currNum)

		if(maxCurr > maxGlobal)
			maxGlobal = maxCurr
	}

	return maxGlobal
}

// const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// console.log('Should be 6', maxSubArray(arr1) === 6)

// const arr2 = [-2, 3, 2, -1]
// console.log('Should be 5', maxSubArray(arr2) === 5)