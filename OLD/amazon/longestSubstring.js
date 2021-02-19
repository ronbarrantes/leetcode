/**
 * @param {string} s
 * @return {number}
*/

var lengthOfLongestSubstring = function(s) {
	let maxLength = 0
	let l = 0 // left pointer
	let r = 0 // right pointer
	let arr = []
  // increase counter
	while(r < s.length){
		if (arr.includes(s[r])){
			l++
			arr.shift()
		} else{
			arr.push(s[r])
			r++
		}

		maxLength = Math.max(r-l, maxLength)
	}
	return maxLength
}

console.log(lengthOfLongestSubstring('pwwke'), 'EXPECT 3')