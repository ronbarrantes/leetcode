const BST = require('./bst')
const util = require('util')

const bst = new BST()

// bst.insert(15)
// bst.insert(25)
// bst.insert(10)
// bst.insert(7)
// bst.insert(22)
// bst.insert(17)
// bst.insert(13)
// bst.insert(5)
// bst.insert(9)
// bst.insert(27)

// bst.insert(15)
// bst.insert(3)
// bst.insert(1)
// bst.insert(4)
// bst.insert(20)
// bst.insert(17)
// bst.insert(21)
// bst.insert(28)
// bst.insert(2)
// bst.insert(31)

for(let i = 0; i < 20; i++){
    bst.insert(i)
}

// bst.insert(4)
// bst.insert(20)
// bst.insert(17)
// bst.insert(21)
// bst.insert(15)
// bst.insert(3)
// bst.insert(1)

console.log(util.inspect(bst, false, null, true))

console.log('PRE ORDER-->')

bst.balance()
console.log(util.inspect(bst, false, null, true))

console.log('ROOT NODE-->', bst.getRootNode().val)
const root = bst.getRootNode()
bst.preorder(root)
