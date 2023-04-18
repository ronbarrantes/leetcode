const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const arrVals = Object.keys(values)
const tens = arrVals.filter((x, i) => i % 2 === 0)
const fives = arrVals.filter((x, i) => i % 2 !== 0)

console.log(tens)
console.log(fives)

/**
 
 I
 II
 III
 IV
 V
 VI
 VII
 VII
 XI


 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const strNum = `${num}`
  let res = []

  for (let i = 0; i < strNum.length; i++) {
    let currNum = +strNum[strNum.length - 1 - i]
    let romanLetters = ''

    if (currNum === 4 || currNum === 9) {
      romanLetters = tens[i]
      romanLetters += currNum > 5 ? tens[i + 1] : fives[i]
      res.push(romanLetters)
      continue
    }

    if (currNum >= 5) {
      romanLetters = fives[i]
      currNum -= 5
    }

    romanLetters += tens[i].repeat(currNum)
    res.push(romanLetters)
  }

  return res.reverse().join('')
}

const sample = [
  { input: 3, answer: 'III' },
  { input: 58, answer: 'LVIII' },
  { input: 50, answer: 'L' },
  { input: 338, answer: 'CCCXXXVIII' },
  { input: 1994, answer: 'MCMXCIV' },
  { input: 239, answer: 'CCXXXIX' },
]

sample.forEach((item, idx) => {
  const { input, answer } = item
  const result = intToRoman(input)

  console.log(
    `ANS`,
    result,
    `Result for ${input} ${
      answer === result ? 'is correct' : `should be ${answer}`
    }`,
  )
})
