var isPalindrome = function(s) {
  // lowercase and remove the extra symbols
	s = s.toLowerCase().replace(/\W/g, '')
  // loop over half of the array
	for (let i = 0; i < s.length / 2; i++) {
    // if any of the letters dont repeat
    // return false
		if (s[i] !== s[s.length - 1 - i]) {
			return false
		}
	}

	return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))