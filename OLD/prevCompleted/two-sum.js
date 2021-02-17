var twoSum = function(nums, target) {
    let hash = {}
    let i = 0

    while (i < nums.length) {

    // if value appears on the hash
        if (hash[nums[i]] || hash[nums[i]] === 0)
            return [hash[nums[i]], i]

    // if it doesnt appear
        hash[target - nums[i]] = i
        i++
    }
}

console.log(twoSum([3, 6, 11, 15], 9), 'Expect [0, 1]')

console.log(twoSum([2, 5, 7, 15], 12), 'Expect [1, 2]')