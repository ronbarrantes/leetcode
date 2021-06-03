const { basicTest: test } = require('../utils/basicUtils')

const encrypt = (arr) => {
	if(arr.length<=1){
		return arr
	}

	const midIdx = Math.floor((arr.length - 1) /2)
	const middle = arr[midIdx]
	const left = encrypt(arr.slice(0, midIdx))
	const right = encrypt(arr.slice(midIdx + 1))

	const newArr = [middle, ...left, ...right]
	return newArr
}

function findEncryptedWord(s) {
	let arr = s.split('')
	const encryptedWord = encrypt(arr)
	return encryptedWord.join('')
}

var s1 = 'abc'
var expected1 = 'bac'
var output1 = findEncryptedWord(s1)

var s2 = 'abcd'
var expected2 = 'bacd'
var output2 = findEncryptedWord(s2)

test(s1, output1, expected1)
test(s2, output2, expected2)

console.log(findEncryptedWord('abcdefghijklmnopqrstuvwxyz'))
