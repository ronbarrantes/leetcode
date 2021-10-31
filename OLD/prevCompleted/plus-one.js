var plusOne = function(digits) {
	let carry = 0
	let i = digits.length - 1

	while (i >= 0) {

		if (digits[i] < 9) {
			digits[i] += 1
			break
		}

		// if the number is 9
		if (digits[i] >= 9) {
			carry = 1
			digits[i] = 0
		}

		// if end of the array
		if (carry > 0 && i === 0) {
			digits.unshift(carry)
			break
		}
		i--
	}

	return digits
}

let nums = [1, 2, 3]
console.log(plusOne(nums), 'Expect [1,2,4]')

let nums2 = [1, 2, 9]
console.log(plusOne(nums2), 'Expect [1,3,0]')

let nums3 = [9, 9]
console.log(plusOne(nums3), 'Expect [1,0,0]')