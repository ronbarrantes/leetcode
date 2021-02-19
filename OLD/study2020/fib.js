const helper = (num, cache={}) => {
	let result = null

	if (cache[num]){
		return cache[num]
	}

	if (num < 2)
		result = num
	else
		result = helper(num-1, cache) + helper(num-2, cache)

	cache[num] = result
	return result
}

var fib = function(N) {
	return helper(N)
}

console.time('time')
console.log(fib(30))
console.timeEnd('time')
