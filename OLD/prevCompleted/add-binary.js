/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // create vars
    let carry = 0
    let result = ''

  // add like it's binary
    while(a.length || b.length){
        let num1 = a.length ? parseInt(a.slice(-1)) : 0
        let num2 = b.length ? parseInt(b.slice(-1)) : 0

        a = a.slice(0, -1)
        b = b.slice(0, -1)

        let addition = num1 + num2 + carry
        switch(addition) {
            case 1:
                carry = 0
                result = '1' + result
                break
            case 2:
                carry = 1
                result = '0' + result
                break
            case 3:
                carry = 1
                result = '1' + result
                break
            default:
                carry = 0
                result = '0' + result
        }
    }
  // add carry if necessary
    if (carry) result = '1' + result

    return result
}
