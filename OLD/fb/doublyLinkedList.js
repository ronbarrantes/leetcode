class Node {
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    append(item){
        let node = new Node(item)

        if(!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            console.log(node.prev)
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
    }
}

const list = new DoublyLinkedList()
list.append(3)
list.append(5)
list.append(7)

console.log(list)