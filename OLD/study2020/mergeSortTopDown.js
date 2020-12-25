/**
 * @param {number[]} nums
 * @return {number[]}
 */

const array = require('./randomNumbers')

const merge = (leftList, rightList) => {
  let lPointer = 0
  let rPointer = 0
  let result = []

  while(lPointer < leftList.length && rPointer < rightList.length){
    if (leftList[lPointer] < rightList[rPointer]){
      result.push(leftList[lPointer])
      lPointer ++
    }

    else {
      result.push(rightList[rPointer])
      rPointer ++
    }
  }

  result = [ ...result,
    ...leftList.slice(lPointer),
    ...rightList.slice(rPointer),
  ]

  return result
}

var sortArray = function(nums) {
  if (nums.length <= 1)
    return nums

  const pivot = nums.length/2
  const left = sortArray(nums.slice(0, nums.length/2))
  const right = sortArray(nums.slice(pivot))
  return merge (left, right)
}

console.log('ORIGIN', array)

console.time('time')
console.log('SORTED', sortArray(array))
console.timeEnd('time')

