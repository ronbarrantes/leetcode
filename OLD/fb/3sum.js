
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // things I need to solve the problem

  // an array to keep the inside arrays
    let solution = []

  // a function that checks if current temp is in
    const isSumValid = arr => {
        const toCheck = solution[solution.length-1]
        if(!toCheck)
            return true
    // if it does exist run over the loop
        for(let i = 0; i < arr.length; i++){
            if(toCheck[i] !== arr[i])
                return true
        }
        return false
    }

  // a function that get the sums
    const lookForSums = nums => {
    // three pointers
        let start = 0
        let middle = 1
        let end = nums.length - 1
        nums = nums.sort((a, b) => a-b)

        while(start+2 <= end){
            let sum = nums[start] + nums[middle] + nums[end]
            if(middle === end){
                start++
                middle = start + 1
            }
            else
            if(sum < 0)
                middle++
            else
            if(sum > 0)
                end--
            else
            if(sum === 0){
                let arr = [nums[start], nums[middle], nums[end]]
                if(isSumValid(arr))
                    solution.push(arr)
                start++
                middle = start+1
            }

        }
    }

    lookForSums(nums)
    return solution
}

const answer = [
    {
        input: [-1, 0, 0, 0, 1, -1, 2, 1, 2, -1, -4],
        expect: [[-4, 2, 2], [-1, -1, 2], [-1, 0, 1], [0, 0, 0]],
    },

    { input: [-2, 0, 1, 1, 2],
        expect: [[-2, 0, 2], [-2, 1, 1]],
    },
]

answer.forEach(arr => {
    const sum = threeSum(arr.input)
    console.log('3 Sum -->', sum)
    console.log('EXPECT ->', arr.expect)
    console.log(`is true ${sum === arr.expect}`)
})