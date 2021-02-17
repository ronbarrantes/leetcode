/**
 * @param {character[][]} board
 * @return {boolean}
 */

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

const subBoxPos = (row, col) => {
    const rowPos = Math.floor(row / 3)
    const colPos = Math.floor(col / 3)
    return rowPos * 3 + colPos
}

var isValidSudoku = function (board) {
    const rows = new Map()
    const columns = new Map()
    const subBoxes = new Map()

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            const val = board[row][col]
            const sbVal = subBoxPos(row, col)

            if (val !== '.') {
                const isValInRow = hasValue(rows, row, val)
                const isValInCol = hasValue(columns, col, val)
                const isValInSqr = hasValue(subBoxes, sbVal, val)

                if (isValInRow || isValInCol || isValInSqr)
                    return false

                addValue(rows, row, val)
                addValue(columns, col, val)
                addValue(subBoxes, sbVal, val)
            }
        }
    }

    return true
}

const asw2 = [
    ['.', '8', '7', '6', '5', '4', '3', '2', '1'],
    ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['3', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['6', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['9', '.', '.', '.', '.', '.', '.', '.', '.'],
]

const asw1 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.log(isValidSudoku(asw2), 'EXPECT --> true')
