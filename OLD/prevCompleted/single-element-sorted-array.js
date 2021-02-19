/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
	let xor = 0

	for (let i = 0; i < nums.length; i++){
		xor = xor ^ nums[i]
	}

	return xor
}

console.log(singleNonDuplicate([4, 1, 2, 1, 2]))