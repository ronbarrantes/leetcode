/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	const newLetters = new Map()
	const usedLetters = new Set()

	for(let i in s){
		const letter = s[i]

		if(newLetters.has(letter)){
			usedLetters.add(letter)
			newLetters.delete(letter)
		}

		if(!usedLetters.has(letter)){
			newLetters.set(letter, i)
		}
	}

	if(newLetters.size === 0)
		return -1

	return newLetters.entries().next().value[1]
}

console.log(`Expect 0`, firstUniqChar('leetcode'))
console.log(`Expect 6 ==> `, firstUniqChar('letetlcod'))
console.log(`Expect -1`, firstUniqChar('aabbcc'))