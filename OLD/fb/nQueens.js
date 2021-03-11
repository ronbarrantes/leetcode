/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let rows = []
    let solution = []

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
    const drawSolution = () => {
        let queen = []
        for(let i = 0; i < rows.length; i++){
            let leftOfQueen = '.'.repeat(rows[i])
            let rightOfQueen = '.'.repeat(rows.length - 1 - rows[i])
            queen.push(leftOfQueen + 'Q' + rightOfQueen)
        }
        solution.push(queen)
    }

    const nextQueen = (row = 0) => { //// backtracky bit
        for (let col = 0; col < n; col++){
            if(isNotUnderAttack(row, col)){
                placeQueen(col)
                if(row + 1 === n)
                    drawSolution()
                else
                    nextQueen(row + 1)
                removeQueen()
            }
        }
    }

    nextQueen()
    return solution
}

console.log(solveNQueens(6))