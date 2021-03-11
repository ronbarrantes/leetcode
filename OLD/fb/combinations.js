/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function(n, k) {
    let result = []
    let numsArray = []

    for (let i = 1; i<=n; i++){
        numsArray.push(i)
    }

    const traverse = (nums, level, currArray = []) => {
        if(level === 0)
            result.push([...currArray])

        for(let i = 0; i < nums.length; i++){
            currArray.push(nums[i])
            traverse(nums.slice(i+1), level-1, currArray)
            currArray.pop()
        }
    }

    traverse(numsArray, k)
    return result
}

// const answer = combine(8, 2)
// const expected = [[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[3,4],[3,5],[3,6],[3,7],[3,8],[4,5],[4,6],[4,7],[4,8],[5,6],[5,7],[5,8],[6,7],[6,8],[7,8]]

module.exports = combine

// console.log('RESULT-->', answer)
// console.log('EXPECT-->', expected)
// console.log('answer is', JSON.stringify(answer) === JSON.stringify(expected))
