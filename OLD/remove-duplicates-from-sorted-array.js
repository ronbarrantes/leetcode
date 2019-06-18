/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    // something that loops over the array
    let pointer = 0

    while (pointer < nums.length) {
        // if numbers are equal 
        if (nums[pointer] === nums[pointer + 1]) {
            // remove next number
            nums.splice(pointer + 1, 1)
        }
        else {
            // move pointer
            pointer++
        }
    }
    return nums.length
};


let arr = [1, 2, 2, 2, 2, 2, 3, 3, 4, 5, 5, 6, 10, 10, 15, 15, 16]

console.log(removeDuplicates(arr))