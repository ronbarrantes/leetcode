const bst = require('./sampleBSTs').badBST[0]

const addNumsOnBST = (node) => {
    if(!node.left && !node.right)
        return node.val

    let left = node.left ? addNumsOnBST(node.left) : 0
    let right = node.right ? addNumsOnBST(node.right) : 0

    return node.val + left + right
}

const bstToArr = (node) => {
    let arr = []
    const traverse = node => {
        if(!node)
            return
        traverse(node.left)
        arr.push(node.val)
        traverse(node.right)
    }

    traverse(node)
    return arr
}

const maxNumOnBST = node => {
    if(!node.left && !node.right)
        return node.val

    let num2 = node.left ? maxNumOnBST(node.left): -Infinity
    let num3 = node.right ? maxNumOnBST(node.right): -Infinity

    return Math.max(node.val, num2, num3)
}
