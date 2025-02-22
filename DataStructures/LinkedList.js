import BaseNode from './BaseNode.js';

export default class LinkedList extends BaseNode {
  constructor(val, next = null) {
    super(val);
    this.next = next;
  }

  /**
   * Appends one or more values to the linked list efficiently.
   * @param {any[]} vals - Values to append.
   * @returns {LinkedList} The updated linked list.
   */
  append(...vals) {
    if (vals.length === 0) return this;

    // Find the last node (tail)
    let tail = this;
    while (tail.next) {
      tail = tail.next;
    }

    // Append new nodes
    for (const val of vals) {
      tail.next = new LinkedList(val);
      tail = tail.next;
    }

    return this;
  }

  /**
   * Logs and returns the values of the linked list in array form.
   */
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

  /**
   * Converts an array to a linked list.
   * @param {any[]} arr - The array to convert.
   * @returns {LinkedList} The head of the linked list.
   */
  static arrayToLinkedList(arr) {
    if (arr.length === 0) return null;

    // this is the pointer to be returned
    const head = new LinkedList(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
      current.next = new LinkedList(arr[i]);
      current = current.next;
    }

    return head;
  }
}

// to add from front to back, use for loop
// to add from back to front, use recursion
