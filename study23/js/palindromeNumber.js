const exp = (x) => 10 ** x

const numToSubtract = (num, pos) =>
  pos < 0 ? 0 : Math.floor(num / exp(pos)) * exp(pos)

const extractNumber = (num, pos) => {
  const lCutOff = numToSubtract(num, pos + 1)
  const rCutOff = numToSubtract(num, pos)
  return (rCutOff - lCutOff) / exp(pos)
}

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (Math.abs(x) !== x) return false

  const numOfDigits = Math.floor(Math.log10(x))

  if (numOfDigits === 0) return true

  for (let i = 0; i <= numOfDigits / 2; i++) {
    const reverseIdx = numOfDigits - i
    const leftNum = extractNumber(x, reverseIdx)
    const rightNum = extractNumber(x, i)

    if (leftNum !== rightNum) return false
  }

  return true
}

const data = [
  { input: 121, answer: true },
  { input: -121, answer: false },
  { input: 10, answer: false },
  { input: 1000, answer: false },
  { input: 888, answer: true },
  { input: 123345, answer: false },
]

data.forEach((item) => {
  const result = isPalindrome(item.input)
  console.log(
    `${item.input} is ${result === item.answer ? 'correct' : 'incorrect'}`,
  )
})

// console.log(extractNumber(12345, 4) === 3)
