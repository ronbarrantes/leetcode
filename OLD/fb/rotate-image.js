/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const l = matrix.length

    for(let x = 0; x < (l - 1) / 2; x++){
        for(let y = 0; y < l/2; y++){
            const tl = matrix[x][y]
            const tr = matrix[y][l-1-x]
            const br = matrix[l-1-x][l-1-y]
            const bl = matrix[l-1-y][x]

            matrix[x][y] = bl
            matrix[y][l-1-x] = tl
            matrix[l-1-x][l-1-y] = tr
            matrix[l-1-y][x] = br
        }
    }

    return matrix
}

module.exports = rotate