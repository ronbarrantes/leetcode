const lists = [{
    val: 1, next: {
        val: 3, next: {
            val: 4, next: {
                val: 5, next: {
                    val: 6, next: null,
                },
            },
        },
    },
}, {
    val: 1, next: {
        val: 4, next: null,
    },
}, {
    val: 1, next: {
        val: 4, next: {
            val: 5, next: null,
        },
    },
}
, {
    val: 1, next: {
        val: 3, next: {
            val: 6, next: null,
        },
    },
}]

var mergeTwoLists = function(l1, l2) {
  // combine the lists
    let arr = []

    const combine = (l1, l2) => {
        if (l1 === null && l2 === null)
            return arr

        if (l1 === null || l2 && l2.val < l1.val){
            arr.push(l2.val)
            return combine(l1, l2.next)
        }

        if (l2 === null || l1 && l1.val <= l2.val){
            arr.push(l1.val)
            return combine(l1.next, l2)
        }
    }

    const result = combine(l1, l2)

  // return it as a linked list
    return result
}

console.log(mergeTwoLists(lists[2], lists[2]))
console.log(mergeTwoLists(lists[1], lists[1]))
console.log(mergeTwoLists(lists[3], lists[2]))
console.log(mergeTwoLists(lists[0], lists[3]))