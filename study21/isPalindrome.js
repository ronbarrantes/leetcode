/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	if(s.length <= 1){
		return true
	}

	s = s.toLowerCase()
	s = s.replace(/[\W_]/g, '')

	for(let i = 0; i < s.length/2; i++){
		const end = s.length - 1 - i
		if(s[i] !== s[end]){
			return false
		}
	}
	return true
}

// console.log('Resolve true', isPalindrome('A man, a plan, a canal: Panama'))
// console.log('Resolve false', isPalindrome('rat'))
// console.log('Resolve true', isPalindrome('d'))
console.log('Resolve true ==>', isPalindrome('ab_a'))
console.log('Resolve true ==>', isPalindrome('ab-a'))

