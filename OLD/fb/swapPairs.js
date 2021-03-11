const { displayList, deepCopy } = require('./util')

const pairs = {
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:{
                        val:6,
                        next:null,
                    },
                },
            },
        },
    },
}

var swapPairs = function(head) {
    r

    if (!head || !head.next)
        return head

    let list = head.next.next
    let node = head.next
    node.next = head
    node.next.next = swapPairs(list)
    return node
}

displayList(swapPairs(pairs))