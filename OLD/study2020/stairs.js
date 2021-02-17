const helper = (num, cache={}) => {
    let result = null

    if (cache[num]){
        return cache[num]
    }

    if (num <= 2)
        result = num
    else
        result = helper(num-1, cache) + helper(num-2, cache)

    cache[num] = result
    return result
}

var climbStairs = function(n) {
    return helper(n)
}

console.time('time')
console.log(climbStairs(4))
console.timeEnd('time')
