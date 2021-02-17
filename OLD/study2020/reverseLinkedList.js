const helper = (head) => {
    if (!head){
        return
    }

    let prev = null
    let curr = head
    let next = null

    console.log('HEAD', head.val)
    return reverseList(head.next)

}

var reverseList = function(head) {

    let prev = null
    let curr = head
    let next = null

    while (curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    head = prev
    return head
}

const listNode = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: null,
                    },
                },
            },
        },
    },
}

console.log(reverseList(listNode))