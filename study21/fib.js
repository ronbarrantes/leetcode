const cache = new Map()

var fib = function(n) {
	if(cache.has(n)){
		return cache.get(n)
	}

	if(n === 0)
		return 0

	if(n === 1 || n === 2)
		return 1

	cache.set(n, fib(n - 1) + fib(n - 2))
	return cache.get(n)

}

console.log('FIB IS', fib(40))