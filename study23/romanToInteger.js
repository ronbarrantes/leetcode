const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0

  for (let i = s.length - 1; i >= 0; i--) {
    const currVal = values[s[i]]
    const nextVal = values[s[i - 1]]

    if (nextVal < currVal) {
      result -= nextVal
      i--
    }
    result += currVal
  }

  return result
}

console.log('RESULT', romanToInt('LVIII'))
