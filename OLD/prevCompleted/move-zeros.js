/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0
    let steps = 0

    while(i<nums.length - steps){
        if (nums[i] === 0) {
            console.log(nums[i])
            nums.splice(i, 1)
            nums.push(0)
            steps++
        }

    // if number is not 0
        if (nums[i] !== 0){
            i++
        }
    }

}
