/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function(board) {
	const rows = new Map()
	const columns = new Map()
	const subBoxes = new Map()

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

	const addValue = (group, subGroup, val) => {
		if (group.has(subGroup)) {
			group.get(subGroup).add(val)
		} else {
			group.set(subGroup, new Set(val))
		}
	}

	const removeValue = (group, subGroup, val) => {
		if (group.has(subGroup)) {
			group.get(subGroup).delete(val)
		}
	}

	const isValidPosition = (row, col, val) => {
		let currVal = val || board[row][col]
		const sbPos = subBoxPos(row, col)

		if (currVal === '.') return true

		const isValInRow = hasValue(rows, row, currVal)
		const isValInCol = hasValue(columns, col, currVal)
		const isValInSqr = hasValue(subBoxes, sbPos, currVal)

		if (isValInRow || isValInCol || isValInSqr)
			return false

		return true
	}

	const addNumber = (row, col, val) => {
		val = val || board[row][col]
		const sbPos = subBoxPos(row, col)
		addValue(rows, row, val)
		addValue(columns, col, val)
		addValue(subBoxes, sbPos, val)
	}

	const removeNumber = (row, col) => {
		const val = board[row][col]
		const sbPos = subBoxPos(row, col)
		removeValue(rows, row, val)
		removeValue(columns, col, val)
		removeValue(subBoxes, sbPos, val)
	}

	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board.length; col++) {
			const val = board[row][col]
			if (val !== '.') {
				addNumber(row, col)
			}
		}
	}

	let shouldCollapse = false

	const solve = () => {
		for (let row = 0; row < board.length; row++) {
			for (let col = 0; col < board.length; col++) {
				const val = board[row][col]
				if(val === '.') {
					for(let num = 1; num <= 9; num++){
						const currVal = `${num}`

						if(isValidPosition(row, col, currVal)){
							board[row][col] = currVal
							addNumber(row, col, currVal)
							solve()
							if(shouldCollapse){
								return
							}
							removeNumber(row, col)
							board[row][col] = '.'
						}
					}
					return
				}
			}
		}
		shouldCollapse = true
	}

	solve()
	return board
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