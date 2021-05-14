/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
	let counter = 0

	const explore = (grid, row, col) => {
		if(row < grid.length && col < grid[row].length)
			grid[row][col] = '0'

		if((row + 1 < grid.length && grid[row + 1][col] === '0')
			&& (col + 1 < grid[row].length && grid[row][col + 1] === '0')){
			return
		}

		if(col + 1 < grid[row].length)
			explore(grid, row, col + 1)

		if(row + 1 < grid.length)
			explore(grid, row + 1, col)
	}

	for(let row = 0; row < grid.length; row++){
		for(let col = 0; col < grid[0].length; col++){
			if(grid[row][col] === '1'){
				explore(grid, row, col)
				counter++
			}
		}
	}
	return counter
}

const q1 = {
	input: [
		['1', '1', '1', '1', '0'],
		['1', '1', '0', '1', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0'],
	],
	ans: 1,
}

const q2 ={
	input:[
		['1', '1', '0', '0', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '1', '0', '0'],
		['0', '0', '0', '1', '1'],
	],
	ans: 3,
}

const q3 ={
	input:[
		['1', '0', '1', '1', '0', '1', '1'],
		['1', '0', '1', '1', '0', '1', '1'],
	],
	ans: 3,
}
console.log('ANS', numIslands(q1.input), q1.ans)
console.log('ANS', numIslands(q2.input), q2.ans)
console.log('ANS', numIslands(q3.input), q3.ans)