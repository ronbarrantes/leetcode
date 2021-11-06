const utils = require('../utils/basicUtils')

/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
	// gotta inverstigate everything
	let max = 0
	let currCount = 0

	const explore = (row, col) => {
		// when do I stop
		console.log('ROW|COL:', row, '|', col)
		if(row < 0 || row >= grid.length ||
           col < 0 || col >= grid[0].length ||
           grid[row][col] !== 1){
			return
		}

		// add to the count
		currCount ++
		max = Math.max(max, currCount)
		grid[row][col] = '*'

		// explore bit
		const directions = [[row-1, col], [row+1, col], [row, col-1], [row, col+1]]

		for(const dir of directions){
			console.log('DIRECTION', dir)
			explore(dir[0], dir[1])
		}
	}

	// go over everything
	for(let row = 0; row < grid.length; row++){
		for(let col = 0; col < grid[0].length; col++){
			const currNum = grid[row][col]
			if(currNum === 1){
				explore(row, col)
				currCount = 0
			}
		}
	}

	// if I find a 1 then explore island
	return max
}

const grid = [
	[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]
const output = 6

const input = maxAreaOfIsland(grid)

console.log(input, output)