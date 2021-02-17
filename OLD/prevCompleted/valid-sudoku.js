/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // horizontal sweep
    let valid = true

    for (let i = 0; i < board.length; i++) {
        let hash = {}
        board[i]
            .filter(val => val != '.')
            .find(val => {
                if (hash[val]){
                    valid = false
                }
                hash[val] = true
            })
    }

  // vertical sweep

  // square sweep

    return valid
}

console.log(
    isValidSudoku(
        [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ]),
    'EXPECT --> true',
)