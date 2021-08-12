const BinaryTree = require('../DataStructures/BinaryTree')

const childA1 = new BinaryTree(1)
const childA2 = new BinaryTree(2)
const childA3 = new BinaryTree(3)
const childA4 = new BinaryTree(4)
const childA5 = new BinaryTree(5)
const childA6 = new BinaryTree(6)
const childA7 = new BinaryTree(7)
const childA8 = new BinaryTree(8)
const childA9 = new BinaryTree(9)

childA1.left = childA2
childA1.right = childA3

childA2.left = childA4
childA2.right = childA5

const inOrderLevel = childA1
module.exports = { inOrderLevel }