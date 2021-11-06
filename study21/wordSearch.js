/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
	// let board
	const rows = board.length
	const cols = board[0].length

	const backtrack = (row, col, idx) => {
		// base case
		if(idx >= word.length)
			return true

		// boundaries
		if(row < 0 || row === rows || col < 0 || col === cols || board[row][col] !== word[idx])
			return false

		// backtracky bit
		let isFound = false
		board[row][col] = '*'

		// 						top           	bottom          left            right
		const directions = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]

		for(const dir of directions){
			if(backtrack(dir[0], dir[1], idx + 1)) return true
		}

		// put things back
		board[row][col] = word[idx]
		return isFound
	}

	for(let row = 0; row < rows; row++){
		for(let col = 0; col < cols; col++){
			if(backtrack(row, col, 0)){
				return true
			}
		}
	}
	return false
}

const board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
]
const word = 'ABCCED'

const board2 = [
	['A', 'A', 'A', 'A', 'A', 'A'],
	['A', 'A', 'A', 'A', 'A', 'A'],
	['A', 'A', 'A', 'A', 'A', 'A'],
	['A', 'A', 'A', 'A', 'A', 'A'],
	['A', 'A', 'A', 'A', 'A', 'A'],
	['A', 'A', 'A', 'A', 'A', 'A'],
]
const word2 = 'AAAAAAAAAAAAAAB'

// console.log('SHOULD BE TRUE', exist(board, word))
console.log('SHOULD BE FALSE', exist(board2, word2))
