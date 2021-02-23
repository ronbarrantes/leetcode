const llUtil = require('../utils/linkedList')

var reverseList = function(head) {
	if(!head || !head.next)
		return head

	let prev = reverseList(head.next)
	head.next.next = head
	head.next = null
	return prev
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

const prettyReverse = llUtil.print(reverseList(listNode))
console.log(prettyReverse)