const helper = (num, cache) => {
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

  // let arr = []
    let arr = new Array(N+1).fill(0)
    const result = helper(N, arr)
    console.log('CACHED ARRAY', arr)
    return result
}

console.time('time')
console.log(fib(5))
console.timeEnd('time')
