const print = function(list) {
	let arr = []
	while (list) {
		arr = [...arr, list.val]
		list = list.next
	}
	console.log(arr)
	return arr
}

module.exports = { print }