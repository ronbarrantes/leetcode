/**
 * @param {number} numRows
 * @param {Object[]} row -  row's for the thingy
 * @return {number[][]}
 *
 */

var generate = function(numRows) {
    let triangle = []

    const fillRow = (row, i) => {
        if(i >= row.length)
            return row

        if(i===0 || i === row.length-1)
            row[i] = 1

        else {
            let prevRow = triangle[triangle.length-1]
            row[i] = prevRow[i-1] + prevRow[i]
        }

        fillRow(row, ++i)
        return row
    }

    const rowLevel = level => {
        if (numRows <= 0)
            return
        let newRow = new Array(++level)
        let row = fillRow(newRow, 0)
        triangle.push(row)
        numRows--
        rowLevel(level)
    }
    rowLevel(0)
    return triangle
}

console.log(generate(5))