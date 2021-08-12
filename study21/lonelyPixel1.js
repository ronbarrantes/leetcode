/**
 * @param {character[][]} picture
 * @return {number}
 */

// gonna have to iterate over the entire array thingy
// if we encounter a black pixel, note it
// if we encounter another one exit the current loop and move onto the next row
// keep a counter
// return the counter

const utils = require('../utils/basicUtils')
const data = require('../dummyData/pixels')

const hasBottomNeighbor = (picture, row, col) => {
	let btm = picture[row + 1] && picture[row + 1][col]
	if(btm === 'B')
		return true
	return false
}

var findLonelyPixel = function(picture) {
	let counter = 0

    // MEAT AND POTATOES
	for(let row = 0; row < picture.length; row++){
		let pixelCounter = 0

		for(let col = 0; col < picture[row].length; col++){
			if(picture[row][col] === 'B'){
				pixelCounter++

                // check if other pixels and neighbors
				if(pixelCounter === 2){
					break
				}

				while(hasBottomNeighbor(picture, row, col) || col >= picture[row].length){
					pixelCounter++
					row++
				}
			}
		}

		counter += pixelCounter === 1 ? 1 : 0
	}

	return counter
}

const ans = findLonelyPixel(data)
console.log(ans, 30, ans === 30)
console.log(ans)
// expect 30