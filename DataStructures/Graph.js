// function Node(val, neighbors) {
// 	   this.val = val === undefined ? 0 : val
// 	   this.neighbors = neighbors === undefined ? [] : neighbors
// }

import BaseNode from './BaseNode.js';

/**
 * @param {Node} node
 * @return {Node}
 */
export default class Graph extends BaseNode {
  /**
   * @param {*} val
   * @param {*} neighbors
   */
  constructor(val, neighbors) {
    super(val);
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

