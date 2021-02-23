const assert = require('assert')
const llUtil = require('../utils/linkedList')
const LinkedList = require('../DataStructures/LinkedList')

var reverseList = function(head) {
	if(!head || !head.next)
		return head

	let prev = reverseList(head.next)
	head.next.next = head
	head.next = null
	return prev
}

const listNode = new LinkedList()
const testArr = [1, 2, 3, 4, 5, 6]
listNode.append(...testArr)

const prettyReverse = reverseList(listNode)
assert.deepStrictEqual(llUtil.print(prettyReverse), testArr.reverse(), 'Has a different val')