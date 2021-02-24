const BaseNode = require('./BaseNode')

class LinkedList extends BaseNode{
	constructor(val, next) {
		super(val)
		this.next = next === undefined ? null : next
	}

	/**
	 *
	 * @param vals A value or values to be passed to the LinkedList
	 */
	append(...vals){
		if(vals.length === 0){
			return this
		}

		let node = this

		while (node.next) {
			node = node.next
		}

		if(this.val !== undefined){
			node.next = new LinkedList()
			node = node.next
		}

		vals.forEach((val, i) => {
			node.val = val
			if(i < vals.length - 1){
				node.next = new LinkedList()
				node = node.next
			}
		})

		return this
	}

	// TODO: IMPLEMENT DELETE

	/**
	 * logs and returns the values of the linked list in array form
	 */
	log() {
		let arr = []
		let node = this
		while (node) {
			arr = [...arr, node.val]
			node = node.next
		}
		console.log(arr)
		return arr
	}
}

module.exports = LinkedList