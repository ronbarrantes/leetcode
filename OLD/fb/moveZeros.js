
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let arr = [2, 3, 0, 0, 2, 4, 0, 4]
var moveZeroes = function(nums) {

    let p1 = 0
    let p2 = 0

    while (p2 < nums.length) {
        if(nums[p2] !== 0 && nums[p1] === 0){
            nums[p1] = nums[p2]
            nums[p2] = 0
        }
        if(nums[p1] !== 0){
            p1++
        }
        p2++
    }
}

moveZeroes(arr)

console.log(arr)