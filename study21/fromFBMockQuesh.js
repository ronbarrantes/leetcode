const { basicTest: test } = require('../utils/basicUtils')

const removeZeros = (arr) => {
	let right = arr.length -1
	let left = 0
	let operations = 0

	while(left <= right){
		if(arr[right] !== 0 && arr[left]===0){
			const temp = arr[right]
			arr[right] = arr[left]
			arr[left] = temp
			right--
			left++
			operations++
		} else {
			// right is going to move left until it finds a nonZero
			if(arr[right] === 0)
				right--

			// left is going to move until it finds a zero
			if(arr[left] !== 0)
				left++
		}

	}

	return operations
}

const input1 = [ 1, 0, 2, 0, 0, 3, 4 ]//, a possible answer is [ 4, 1, 3, 2, ?, ?, ? ]
const input2 = [ 0, 1, 2, 3, 4 ]
const input3 = [ 1, 0, 0, 0, 1 ]
const input4 = [ 0, 0, 0, 0, 1 ]
const input5 = [ 1 ]

test(input1, removeZeros(input1), 2)
test(input2, removeZeros(input2), 1)
test(input3, removeZeros(input3), 1)
test(input4, removeZeros(input4), 1)
test(input5, removeZeros(input5), 0)