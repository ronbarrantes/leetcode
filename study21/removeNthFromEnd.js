const LL = require('../DataStructures/LinkedList')
const utils = require('../utils/basicUtils')

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const helper = (head, n, size = 0) => {
	if(!head)
		return null

	helper(head.next, n - 1, size)

	const theSize = size - n - 1
	if(theSize === 0){
	// 	console.log('HEADVAL', temp.val)
	// 	// temp = temp.next
	// 	head.val = head.val + 10
		head.val = head.val + 10
	}

	// temp = head
	return head

}

var removeNthFromEnd = function(head, n) {
	const res = helper(head, n)

	return res
}

const arr = [1, 2, 3, 4, 5]

const list = new LL(1)
list.next = new LL(2)
list.next.next = new LL(3)
list.next.next.next = new LL(4)
list.next.next.next.next = new LL(5)

const ans = removeNthFromEnd(list, 5)
console.log(utils.printLinkedList(ans))