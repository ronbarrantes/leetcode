const util = require('./util')

var sortArray = function(nums) {
  // merge array
    const merge = (left, right) => {
        let lP = 0
        let rP = 0
        let mergedArr = []
    // add to merged
        while(lP < left.length && rP < right.length){
            if(left[lP] < right[rP]){
                mergedArr.push(left[lP])
                lP++
            }
            else{
                mergedArr.push(right[rP])
                rP++
            }

        }

    // add the remainder of both
        mergedArr = [...mergedArr, ...left.slice(lP)]
        mergedArr = [...mergedArr, ...right.slice(rP)]
        return mergedArr
    }

  // merge sort
    const mergeSort = arr => {
        if(arr.length <= 1){
            return arr
        }
        const pivot = Math.floor(arr.length/2)
        const left = mergeSort(arr.slice(0, pivot))
        const right = mergeSort(arr.slice(pivot))
    //return merge left and right
        return merge(left, right)
    }

    return mergeSort(nums)
}

const rA = util.randomArray(10)

console.log('Sorted ->', sortArray(rA))