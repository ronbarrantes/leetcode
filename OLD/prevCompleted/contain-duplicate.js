var containsDuplicate = function(nums) {
    let hash = {}

    if (nums.length === 0) {
        return false
    }

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            return true
        }

        if (!hash[nums[i]]) {
            hash[nums[i]] = true
        }

        if (i === nums.length - 1) {
            return false
        }
    }
}

let arr1 = [2, 1, 2, 4, 1]
let arr2 = [1, 2, 3, 4, 5]

console.log(containsDuplicate(arr1))
console.log(containsDuplicate(arr2))
