const { basicTest } = require('../utils/basicUtils')

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // make array
  let lo = 0
  let hi = s.length - 1
  const arr = s.split('')

  const reg = /[aeiouAEIOU]/

  while (lo < hi) {
    if (!reg.test(arr[lo])) {
      lo++
      continue
    } else if (!reg.test(arr[hi])) {
      hi--
      continue
    } else {
      const temp = arr[lo]
      arr[lo] = arr[hi]
      arr[hi] = temp

      lo++
      hi--
    }
  }

  return arr.join('')
}

basicTest('IceCreAm', reverseVowels('IceCreAm'), 'AceCreIm')
basicTest('leetcode', reverseVowels('leetcode'), 'leotcede')
