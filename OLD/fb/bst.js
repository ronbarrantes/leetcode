class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

  // insert
    insert(val){
        const newNode = new Node(val)

        if(this.root === null)
            this.root = newNode
        else
            this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode){
        if(newNode.val < node.val){
            if(node.left === null)
                node.left = newNode
            else
                this.insertNode(node.left, newNode)
        }
        else {
            if(node.right === null)
                node.right = newNode
            else
                this.insertNode(node.right, newNode)
        }
    }

    remove(val){
        this.root = this.removeNode(this.root, val)
    }

    removeNode(node, key){
    // if root is null, tree is empty
        if(node === null)
            return null

        else if(key < node.val) {
            node.left = this.removeNode(node.left, key)
            return node
        }

        else if(key > node.val){
            node.right = this.removeNode(node.right, key)
            return node
        }

        else{
            if(node.left === null && node.right === null){
                node = null
                return node
            }

            if(node.left === null){
                node = node.right
                return node
            }

            if(node.right === null){
                node = node.left
                return node
            }

            const aux = this.findMinNode(node.right)
            node.val = aux.val

            node.right = this.removeNode(node.right, aux.val)
            return node
        }

    }

    findMinNode(node){
        if(node.left === null){
            return node
        }
        else
            return this.findMinNode(node.left)
    }

    getRootNode(){
        return this.root
    }

    inorder(node){
        if(node !== null){
            this.inorder(node.left)
            console.log(node.val)
            this.inorder(node.right)
        }
    }

    inreverseorder(node){
        if(node !== null){
            this.inreverseorder(node.right)
            console.log(node.val)
            this.inreverseorder(node.left)
        }
    }

    preorder(node) {
        if(node !== null){
            console.log(node.val)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    postorder(node) {
        if(node !== null){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.val)
        }
    }

    search(node, val){
        if(node===null){
            return null
        }
        else if(val < node.val)
            return this.search(node.left, val)
        else if(val > node.val)
            return this.search(node.right, val)

        else
            return node
    }

    balance(){
        let orderList = []

        const order = (node) => {
            if (node !== null){
                order(node.left)
                orderList.push(node.val)
                order(node.right)
            }
        }

        order(this.root)
        this.root = null
        this.balancingTree(orderList)
    }
    balancingTree(list){
        const middle = Math.floor(list.length/2)

    // console.log(list)

        if(list[middle]){
      // console.log('MIDDLE --> ', list[middle], middle)
            this.insert(list[middle])
            this.balancingTree(list.slice(0, middle))
            this.balancingTree(list.slice(middle+1))
            return null
        }

    }

}

module.exports = BinarySearchTree