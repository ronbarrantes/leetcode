function ListNode(val) {
	this.val = val
	this.next = null
}

ListNode.prototype.print = function() {
	let arr = []
	let node = this
	while (node) {
		arr = [...arr, node.val]
		node = node.next
	}
	console.log(arr)
	return arr
}

ListNode.prototype.append = function(num) {
	let node = this

	if (node.val === undefined) {
		node.val = num
		return node
	}

	while (node.next) {
		node = node.next
	}

	node.next = new ListNode(num)
	return node
}

ListNode.prototype.mock = function(...nums) {
	let arr = nums.length ? [...nums] : [1, 2, 3, 4, 5]
	arr.forEach(num => this.append(num))
	return this
}

module.exports = ListNode