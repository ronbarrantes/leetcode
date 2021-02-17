/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hash = {}
    let result = []
  // adding to hash

    for(let i = 0; i < nums1.length; i++){
        if (hash[nums1[i]]) {
            let value = parseInt(hash[nums1[i]])
            value++
            hash = { ...hash, [nums1[i]]: value }
        }

        if (!hash[nums1[i]]){
            hash[nums1[i]] = 1
        }
    }

    for(let i = 0; i < nums2.length; i++){
        if (hash[nums2[i]] > 0){
            let value = parseInt(hash[nums2[i]])
            value--
            hash = { ...hash, [nums2[i]]: value }
            result = [...result, nums2[i]]
        }
    }

    return result
}
