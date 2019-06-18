
var maxDepth = function(root) {
  let curr = 0
  let max = 0

  const traverse = (node) => {
    if (!node){
      return
    } else {
      curr++
      if (max < curr){
        max = curr
      }
      traverse(node.left)
      traverse(node.right)
      curr--
    }
  }

  traverse(root)
  return max
}



const TreeNode = {
  val: 3,
  right: {
    val: 20,
    right: {
      val: 7,
      right: null,
      left: null },
    left:{
      val: 15,
      right: null,
      left: null } },
  left:  {
    val: 9,
    right: null,
    left: null,
  },
}

console.log(maxDepth(TreeNode))