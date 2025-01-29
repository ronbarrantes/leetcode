/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const findFlowersLeft = (flowerbed, idx, count) => {
  while (idx < flowerbed.length) {
    if (
      flowerbed[idx] === 0 &&
      (!flowerbed[idx + 1] || flowerbed[idx + 1] === 0) &&
      (!flowerbed[idx - 1] || flowerbed[idx - 1] === 0)
    ) {
      count--
      idx++
    }
    idx++
  }

  return count
}

var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true

  for (let i = 0; i < flowerbed.length; i++) {
    let flowersLeft = findFlowersLeft(flowerbed, i, n)

    if (flowersLeft === 0) return true
  }

  return false
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2) === false)
console.log(canPlaceFlowers([0], 0) === true)
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1) === true)
console.log(canPlaceFlowers([0], 1) === true)
console.log(canPlaceFlowers([1], 1) === false)
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2) === false)
