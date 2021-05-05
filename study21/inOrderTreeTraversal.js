const tree = require('../dummyData/BSTs').inOrderTree//.inOrderTree

const addSpaces = (num) => {
	let space = ''
	for(let i = 0; i < num; i++){
		space += ' '
	}
	return space
}

const traversal = (node, level = 0) => {
	if(!node)
		return null

	traversal(node.left, level + 1)
	console.log(addSpaces(level * 3), node.val)
	traversal(node.right, level + 1)
}

const q = []
const arr = []

const inOrderTraversal = (node) => {
	let tempNode = node
	while(!tempNode){
		console.log(node.val)
		q.push(node.left)
		q.push(node.right)
		q.shift()
	}
}




// def printLevelOrder(root):
//     # Base Case
//     if root is None:
//         return
     
//     # Create an empty queue
//     # for level order traversal
//     queue = []
 
//     # Enqueue Root and initialize height
//     queue.append(root)
 
//     while(len(queue) > 0):
       
//         # Print front of queue and
//         # remove it from queue
//         print (queue[0].data)
//         node = queue.pop(0)
 
//         #Enqueue left child
//         if node.left is not None:
//             queue.append(node.left)
 
//         # Enqueue right child
//         if node.right is not None:
//             queue.append(node.right)








// traversal(tree)

inOrderTraversal(tree)

/*
printLevelorder(tree)
1) Create an empty queue q
2) temp_node = root start from root
3) Loop while temp_node is not NULL
    a) print temp_node->data.
    b) Enqueue temp_node’s children
      (first left then right children) to q
    c) Dequeue a node from q.
 */