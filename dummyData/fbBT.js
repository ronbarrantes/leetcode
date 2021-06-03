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

childA5.left = childA4
childA4.left = childA3
childA3.left = childA2
childA2.left = childA1

childA5.right = childA6
childA6.right = childA7
childA7.right = childA8
childA8.right = childA9

const bt1 = { tree: childA5, longest: 9 }

const childB1 = new BinaryTree(1)
const childB2 = new BinaryTree(2)
const childB3 = new BinaryTree(3)
const childB4 = new BinaryTree(4)
const childB5 = new BinaryTree(5)
const childB6 = new BinaryTree(6)
const childB7 = new BinaryTree(7)
const childB8 = new BinaryTree(8)
const childB9 = new BinaryTree(9)

childB2.left = childB1
childB2.right = childB6

childB6.left = childB5
childB5.left = childB4
childB4.left = childB3

childB6.right = childB7
childB7.right = childB8
childB8.right = childB9

const bt2 = { tree: childB2, longest: 7 }

module.exports = { bt1, bt2 }