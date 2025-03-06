class MyLinkedList {
  constructor() {
    this.val = null;
    this.next = null;
  }

  displayAsArray() {
    const arr = [];
    let node = this;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }

  log() {
    console.log(this.displayAsArray());
  }
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let node = this;

  for (let i = 0; i <= index; i++) {
    if (!node) return null;
    node = node.next;
  }

  return node.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const oldHead = new MyLinkedList();
  oldHead.val = this.val;
  oldHead.next = this.next;

  this.val = val;
  this.next = oldHead;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  // loop all the wayt to the end
  let node = this;
  while (node.next) {
    node = node.next;
  }

  const newNode = new MyLinkedList();
  newNode.val = val;
  node.next = newNode;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let node = this;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  while (0 < index - 2 && node.next) {
    node = node.next;
    index--;
  }

  const newNode = new MyLinkedList();
  newNode.val = val;
  newNode.next = node.next;
  node.next = newNode;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let node = this;

  console.log('index', index);

  if (index === 0) {
    this.val = this.next.val;
    this.next = this.next.next;
  }

  while (0 < index && node.next) {
    console.log('here');
    node = node.next;
    index--;
  }

  console.log('all the way to the end');
  console.log('Index --->>>', index);

  node.val = node.next.val;
  node.next = node.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const myLL = new MyLinkedList();
myLL.get(1);
myLL.addAtHead(3);
myLL.addAtHead(5);
myLL.addAtHead(1);
// console.log('delete at 0', myLL.deleteAtIndex(0));
console.log('delete at 2', myLL.deleteAtIndex(2));
console.log('my linked list', myLL.displayAsArray());

// const input = [
//   [
//     'MyLinkedList',
//     'addAtHead',
//     'addAtTail',
//     'addAtIndex',
//     'get',
//     'deleteAtIndex',
//     'get',
//   ],
//   [[], [1], [3], [1, 2], [1], [1], [1]],
// ];
// const output = [null, null, null, null, 2, null, 3];
