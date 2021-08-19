function numberOfWays(arr, k) {
	let ans = 0
	let pairs = new Map()

	for(const num of arr){
		if(!pairs.has(num))
			pairs.set(num, 1)
		else
			pairs.set(num, pairs.get(num) + 1)
	}

	for(const num of arr){
		const key = k - num
		if(pairs.has(key) && pairs.get(key) !== 0){
			ans += 1
			pairs.set(num, pairs.get(num) - 1)
		}
	}

	return ans/2
}

const k1 = 6
const arr1 = [1, 2, 3, 4, 3]
const expected1 = 2
// const output1 = numberOfWays(arr1, k1)

const arr2 = [1, 5, 3, 3, 3]
const output2 = numberOfWays(arr2, 6)

// console.log(output1, expected1)

console.log(output2, 4)