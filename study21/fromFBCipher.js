const { basicTest: test } = require('../utils/basicTest')

const shiftBy = (num, factor, lo, hi) => {
	const l = lo.charCodeAt()
	const h = hi.charCodeAt()
	const charAmount = h - l + 1
	factor = (factor % charAmount)

	num += factor
	if(num > h)
		num -= charAmount

	return num
}

const rotate = (letter, factor) => {
	let letterNum = letter.charCodeAt()
	const letterAmount = 26
	const numberAmount = 10

	if(letterNum >= 'A'.charCodeAt() && letterNum <= 'Z'.charCodeAt())
		letterNum = shiftBy(letterNum, factor, 'A', 'Z')

	if(letterNum >= 'a'.charCodeAt() && letterNum <= 'z'.charCodeAt())
		letterNum = shiftBy(letterNum, factor, 'a', 'z')

	if(letterNum >= '0'.charCodeAt() && letterNum <= '9'.charCodeAt())
		letterNum = shiftBy(letterNum, factor, '0', '9')

	let newLetter = String.fromCharCode(letterNum)
	return newLetter
}

function rotationalCipher(input, rotationFactor) {
// Write your code here
	let newCipher = ''
	for(const char of input){
		if(/[\w\d]/.test(char)){
			newCipher += rotate(char, rotationFactor)
		} else
			newCipher += char
	}

	return newCipher
}

const input1 = 'All-convoYs-9-be:Alert1.'
const rotationFactor1 = 4
const expected1 = 'Epp-gsrzsCw-3-fi:Epivx5.'
const output1 = rotationalCipher(input1, rotationFactor1)
test(input1, output1, expected1)

const input2 = 'abcdZXYzxy-999.@'
const rotationFactor2 = 200
const expected2 = 'stuvRPQrpq-999.@'
const output2 = rotationalCipher(input2, rotationFactor2)
test(input2, output2, expected2)