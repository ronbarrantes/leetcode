const tree = {
    val: 1,
    right:{
        val: 5,
        right:  { val: 7, right: null, left: null },
        left: { val: 6, right: null, left: null },
    },
    left: {
        val: 2,
        right:  { val: 4, right: null, left: null },
        left:  { val: 3, right: null, left: null },
    },
}

const flatten = require('./flattenTree')

const printTree = node => {
    let count = 0
    const print = (node) => {
        if(!node)
            return

        print(node.left, count+=1)
        console.log(node.val, count)
        print(node.right, count+=1)
    }

    return print(node)
}

printTree(tree)

// console.log(flatten(tree))
