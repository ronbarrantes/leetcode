/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let checkVal = 1
  let newVal = ''

  if (x<0) {
    checkVal = -1
    x *= -1
  }

  //turn x to string
  x = x.toString()

  //reverse it
  for (let i = x.length-1; i>=0; i--){
    newVal += x[i]
  }

  if (newVal >= 2**31 - 1){
    return 0
  }

  // turn newVal back to number
  return parseInt(newVal) * checkVal
}

