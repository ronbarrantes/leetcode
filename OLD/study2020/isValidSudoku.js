var isValidSudoku = function(board) {

	let l = board.length

	let row = new Map()
	let column = new Map()
	let subBox = new Map()

	for(let r = 0; r < l; r++){
		for(let c = 0; c < l; c++){
			if (board[r][c] !== '.'){
				const val = board[r][c]
				const sb = Math.floor(r/3) * 3 + Math.floor(c/3)
        // populate rows

				if(!row.has(r))
					row.set(r, new Set([val]))
				else{
					if(row.get(r).has(val))
						return false
					row.get(r).add(val)
				}

        // populate columns
				if(!column.has(c))
					column.set(c, new Set([val]))
				else{
					if(column.get(c).has(val))
						return false
					column.get(c).add(val)
				}

        // add subbox
				if(!subBox.has(sb))
					subBox.set(sb, new Set([val]))

				else{
					if(subBox.get(sb).has(val))
						return false
					subBox.get(sb).add(val)
				}
			}
		}
	}
	return true
}
