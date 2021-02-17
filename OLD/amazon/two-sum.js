/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {

    let store = {}

  // iterate over the array
    for (let i = 0; i < nums.length; i++){
    // check in the store if there is a number that will add to the target
        if (store[nums[i]] || store[nums[i]] === 0)
            return [store[nums[i]], i]

    // if it doesnt appear
        store[target - nums[i]] = i
    }
}