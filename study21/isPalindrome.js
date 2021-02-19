/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // cleanup string
	s = s.toLowerCase()
	s = s.replace(/\W/g, '')
	console.log('THE STRING===>', s)

	for(let i = 0; i < s.length/2; i++){
		const end = s.length - 1 - i
		if(s[i] !== s[end]){
			return false
		}
	}
	return true
}

console.log('Resolve true', isPalindrome('A man, a plan, a canal: Panama'))