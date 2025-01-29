/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true

  for (let i = 0; i < flowerbed.length - 1 - n * 2; i++) {
    let flowersLeft = n
    let p = i + 1

    while (p < flowerbed.length - 1 - n * 2 && flowersLeft !== 0) {
      if (flowerbed[p] === 0 && flowerbed[p + 1] === 0) {
        p += 2
        flowersLeft -= 1
      }
    }

    if (flowersLeft === 0) return true
  }

  return false
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2) === false)
console.log(canPlaceFlowers([0], 0) === true)
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1) === true)
console.log(canPlaceFlowers([0], 1) === true)
