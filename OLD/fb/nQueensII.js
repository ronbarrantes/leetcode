/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let rows = []
    let solution = 0

    const isNotUnderAttack = (row, col) => {
        for(let i = 0; i < rows.length; i++){
            const isVertical = col === rows[i]
            const isDiagonal = Math.abs(row - i) === Math.abs(rows[i] - col)
            if(isVertical || isDiagonal)
                return false
        }
        return true
    }

    const placeQueen = (col) => {
        rows.push(col)
    }
    const removeQueen = () => {
        rows.pop()
    }

    const nextQueen = (row = 0) => { //// backtracky bit
        for (let col = 0; col < n; col++){
            if(isNotUnderAttack(row, col)){
                placeQueen(col)
                if(row + 1 === n)
                    solution += 1
                else
                    nextQueen(row + 1)
                removeQueen()
            }
        }
    }

    nextQueen()
    return solution
}

console.log(totalNQueens(4))