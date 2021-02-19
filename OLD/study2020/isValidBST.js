
const validate = (list) => {
	for(let i = 0; i < list.length - 1; i++){
		if (list[i] >= list[i+1])
			return false
	}

	return true
}

const divide = (root, stack, list) => {

	if (!root)
		return true

	stack.push(root.val)

	if (!root.left || !root.right && root.val){
		list.push(stack.pop())
	}

	divide(root.left, stack, list)
	divide(root.right, stack, list)

	stack.length && list.push(stack.pop())
}

var isValidBST = function(root) {
	let stack = []
	let list = []

	divide(root, stack, list)
	return validate(list)
}

const smallTree = {
	val: 0,
	right: null,
	left:
    {
    	val: 1,
    	right:  null,
    	left:  null },
}

const bigTree = {
	val: 3,
	right:
    {
    	val: 5,
    	right:  { val: 6, right: null, left: null },
    	left:  { val: 4, right: null, left: null } },
	left:
    {
    	val: 1,
    	right:  { val: 2, right: null, left: null },
    	left:  { val: 0, right: null, left: null } },
}

console.log(isValidBST(smallTree))

// console.log('STACK', stack)
// console.log('LIST', list)