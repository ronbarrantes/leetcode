const util = require('util')
const sampleBST = require('./sampleBSTs')

let prev = -Infinity
let isValid = true

var isValidBST = function(root) {

    const traverse = (node) => {
        if(node === null)
            return

        isValidBST(node.left)
        if(prev>=node.val){
            isValid = false
        }
        prev = node.val
        isValidBST(node.right)
    }

    traverse(root)
    return isValid
}

console.log(util.inspect(isValidBST(sampleBST.badBST[0]), false, null, true))