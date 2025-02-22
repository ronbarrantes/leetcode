var MyLinkedList = function () {
  this.val = 0;
  this.next = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  // loop over until we get to the correct index
  //
  // or no more items in the linked list
  let node = this;
  while (index > 0 || !node) {}
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {};

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
console.log('my linked list', myLL);

const input = [
  [
    'MyLinkedList',
    'addAtHead',
    'addAtTail',
    'addAtIndex',
    'get',
    'deleteAtIndex',
    'get',
  ],
  [[], [1], [3], [1, 2], [1], [1], [1]],
];
const output = [null, null, null, null, 2, null, 3];
