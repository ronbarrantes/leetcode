var myAtoi = function(str) {
	console.log ('MAIN STRING -->', str)

	let newString = ''
	let result = 0
	let insertNumber = true

	for (let i = 0; i < str.length; i++) {
		if (str[i].search(/[0-9- ]/) === -1)
			insertNumber = false

		if (str[i].search(/[0-9-+]/) !== -1 && insertNumber)
			newString += str[i]
	}

	if (typeof Number(newString) === 'number' && newString !== '-')
		result = Number(newString)

	// check the string is within range
	if (result > 2 ** 31 - 1)
		return 2 ** 31 - 1

	if (result < -(2 ** 31))
		return -(2 ** 31)

	// return result
	return result
}

let input1 = '42' // expect 42
let input2 = '      -42' // expect -42
let input3 = '4193 with words' // expect 4193
let input5 = '-91283472332' // -2147483648
let input4 = 'words and 987' // expect 0
let input6 = '.42' // -2147483648
let input7 = '+' //
let input8 = '3.14'
let input9 = '-'
let input10 = '/'
let input11 = '*'
let input15 = '-00012abc29292'
let input16 = '+1'

console.log(myAtoi(input8), '| EXPECT -> 3')
console.log(myAtoi(input1), '| EXPECT -> 42')
console.log(myAtoi(input2), '| EXPECT -> -42')
console.log(myAtoi(input3), '| EXPECT -> 4193')
console.log(myAtoi(input5), '| EXPECT -> -2147483648')
console.log(myAtoi(input15), '| EXPECT -> -12')
console.log(myAtoi(input4), '| EXPECT -> 0')
console.log(myAtoi(input6), '| EXPECT -> 0')
console.log(myAtoi(input7), '| EXPECT -> 0')
console.log(myAtoi(input9), '| EXPECT -> 0')
console.log(myAtoi(input10), '| EXPECT -> 0')
console.log(myAtoi(input11), '| EXPECT -> 0')
console.log(myAtoi(input16), '| EXPECT -> 1')

