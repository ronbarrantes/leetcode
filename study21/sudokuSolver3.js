/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function(board) {
	const rows = {}
	const columns = {}
	const subBoxes = {}
	let finalGrid = []

	// add value
	const addValue = (group, subGroup, val) => {
		if (group.has(subGroup)) {
			group.get(subGroup).add(val)
		} else {
			group.set(subGroup, new Set(val))
		}
	}

	const subBoxPos = (row, col) => {
		const rowPos = Math.floor(row / 3)
		const colPos = Math.floor(col / 3)
		return rowPos * 3 + colPos
	}

	const hasValue = (group, subGroup, val) => {
		if (group.has(subGroup)) {
			return group.get(subGroup).has(val)
		}
	}

	// remove value

	// check if valid position

	// pre prop

	for(let row = 0; row < 9; row++){
		for(let col = 0; col < 9; col++){
			// if is not '.'
				// add numbers to the maps
		}
	}

	// check
	const solve = () => {
		for(let row = 0; row < 9; row++){
			for(let col = 0; col < 9; col++){
				// STUFF
				// if it's not a '.'
					// loop over the numbers 1 through 9
						// check if it's the number is a valid position
							// if yes then put the number on the board
							// recurse
								// if the position of the of rows and columns is 9x9
									// return everything and collapse the stack
							// remove the number and switch it back to *
					// return if it reaches 9 so it can backtrack
			}
		}

	}
}

const sdk1 =
[
	['5', '3', '.', '.', '7', '.', '.', '.', '.']
	, ['6', '.', '.', '1', '9', '5', '.', '.', '.']
	, ['.', '9', '8', '.', '.', '.', '.', '6', '.']
	, ['8', '.', '.', '.', '6', '.', '.', '.', '3']
	, ['4', '.', '.', '8', '.', '3', '.', '.', '1']
	, ['7', '.', '.', '.', '2', '.', '.', '.', '6']
	, ['.', '6', '.', '.', '.', '.', '2', '8', '.']
	, ['.', '.', '.', '4', '1', '9', '.', '.', '5']
	, ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.time()
console.log(solveSudoku(sdk1))
console.timeEnd()