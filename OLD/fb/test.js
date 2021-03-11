const rotate = require('./rotate-image')
const _ = require('underscore')

const printMatrix = (matrix) => {
    return matrix.map(layer => console.log(layer))
}

const displaySolution = (answer, expected) => {
    printMatrix(answer)
    console.log`---------`
    printMatrix(expected)
    console.log`#########`
    console.log('solution is', _.isEqual(answer, expected))
}

const answer1 = rotate([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
const expected1 = [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]

const answer2 = rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
const expected2 = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

const answer3 = rotate([[1, 2], [3, 4]])
const expected3 = [[3, 1], [4, 2]]

displaySolution(answer1, expected1)
displaySolution(answer2, expected2)
displaySolution(answer3, expected3)