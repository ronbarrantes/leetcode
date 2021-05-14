/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sorter = (left, right) => {
	let arr = []

	while(left.length !== 0 && right.length !== 0){
		const currL = left[0]
		const currR = right[0]
		console.log(left, right)
		if(currL <= currR)
			arr.push(left.shift())
		else
			arr.push(right.shift())

		if(left.length === 0 || right.length === 0){
			arr = [...arr, ...left, ...right]
		}
	}
	return arr
}

var sortArray = function(nums) {
	if(nums.length === 1)
		return nums

	const leftArr = nums.slice(0, nums.length/2)
	const rightArr = nums.slice(nums.length/2)

	const left = sortArray(leftArr)
	const right = sortArray(rightArr)
	return sorter(left, right)
}

console.log('arr', sortArray([1, 6, 4, 3, 9, 2]))