var longestConsecutive = function(nums) {
	let bestStreak = 0
	const set = new Set(nums)

	for(const num of set){
		if(!set.has(num-1)){
			let currNum = num
			let currStreak = 1

			while(set.has(currNum + 1)){
				currNum++
				currStreak++
			}

			bestStreak = Math.max(currStreak, bestStreak)
		}
	}

	return bestStreak
}
// NOT MY SOLUTION, FREAKING CLEVER SOLUTION
const ans1 = [100, 200, 1, 2, 3, 10, 4] // ans 4
const ans2 = [5, 4, 3, 2, 1] // ans 5
const ans3 = [0, 0, 1, 2, 3, 6, 4, 5] // ans 7

console.log('SEQUENCE 1:', longestConsecutive(ans1))
console.log('SEQUENCE 2:', longestConsecutive(ans2))
console.log('SEQUENCE 3:', longestConsecutive(ans3))