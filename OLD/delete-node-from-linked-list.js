const ListNode = require('./LinkedList')
let list = new ListNode()
list.mock()
list.print()

var deleteNode = function(node) {
  let ll = list
  let nextNode = new ListNode(0)
  let carry = 0
  let head = nextNode

  while (ll) {
    console.log(ll.val)
    nextNode.val += ll.val

    if (ll.val === node.val && ll.next !== null) {
      ll = ll.next

      console.log('found one |', ll.val)
    }

    console.log('hello')
    ll = ll.next

    if (carry === 0 && ll === null) {
      return head
    }

    nextNode.next = new ListNode(carry)
    nextNode = nextNode.next
  }
  head.print()
  list = head
  return head
}

deleteNode(new ListNode(1))
list.print()




