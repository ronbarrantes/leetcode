import BaseNode from './BaseNode.js';
import * as utils from '../utils/basicUtils.js';

class BinaryTree extends BaseNode {
  constructor(val, left, right) {
    super(val);
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  printTree(node = this, level = 0) {
    if (!node) return null;

    const val = node.val;
    this.printTree(node.left, level + 1);
    console.log(utils.addSpaces(level * 2), val);
    this.printTree(node.right, level + 1);
  }

  static fromArray(arr) {
    // create a binary tree from an array in level order traversal
    //

    if (arr.length === 0) return null;

    const root = new BinaryTree(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
      const current = queue.shift();
      const leftVal = arr[i++];
      const rightVal = arr[i++];

      if (leftVal !== null && leftVal !== undefined) {
        current.left = new BinaryTree(leftVal);
        queue.push(current.left);
      }

      if (rightVal !== null && rightVal !== undefined) {
        current.right = new BinaryTree(rightVal);
        queue.push(current.right);
      }
    }

    return root;
  }
}

export default BinaryTree;
