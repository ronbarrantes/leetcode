var myAtoi = function (str) {
  // pull out any whitespace or extra characters from the string


  // check the string is within range

  // return the string

  return str
};


let input1 = '42' // expect 42
console.log(myAtoi(input1), 'EXPECT -> 42')
let input2 = '      -42' // expect -42
console.log(myAtoi(input2), 'EXPECT -> -42')
let input3 = '4193 with words' // expect 4193
console.log(myAtoi(input3), 'EXPECT -> 4193')
let input4 = 'words and 987' // expect 987
console.log(myAtoi(input4), 'EXPECT -> 987')
let input5 = '-91283472332' // -2147483648
console.log(myAtoi(input5), 'EXPECT -> -2147483648')
