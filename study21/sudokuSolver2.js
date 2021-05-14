const sudoku = (grid) => {
	const possible = (y, x, value) => {
		const val = `${value}`

		if(val === '.') return true

		for(let i = 0; i < 9; i++){
			if (grid[y][i] === val)
				return false
		}

		for(let i = 0; i < 9; i++){
			if (grid[i][x] === val)
				return false
		}

		const x0 = Math.floor(x / 3) * 3
		const y0 = Math.floor(y / 3) * 3

		for(let i = 0; i < 3; i++){
			for(let j = 0; j < 3; j++){
				if(grid[y0 + i][x0 + j] === val)
					return false
			}
		}

		return true
	}

	let newGrid = []

	const solver = () => {
		for(let y = 0; y < 9; y++){
			for(let x = 0; x < 9; x++){
				if(grid[y][x] === '.'){
					for(let n = 1; n <= 9; n++){
						if(possible(y, x, n)){
							grid[y][x] = n.toString()
							solver()
							grid[y][x] = '.'
						}
					}
					return
				}
			}
		}
		newGrid = JSON.stringify(grid)
		return
	}

	solver()

	return JSON.parse(newGrid)
}

const sdk1 =
[
	// eslint-disable-next-line no-mixed-spaces-and-tabs
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
console.log(sudoku(sdk1))
console.timeEnd()
