const ListNode = require("../DataStructures/LinkedList");

/**
 * Recursively processes two linked lists.
 *
 * @param {ListNode} l1 - The first linked list node.
 * @param {ListNode} l2 - The second linked list node.
 * @returns {[ListNode, number]} An array containing a ListNode and a number.
 */
const recurse = (l1, l2) => {
  // add the numbers
  let remainer = 0;
  if (!l1 && !l2) return [null, remainer];

  const val1 = (l1 && l1.val) || 0;
  const val2 = (l2 && l2.val) || 0;

  const pt1 = (l1 && l1.next) || l1;
  const pt2 = (l2 && l2.next) || l2;

  const newNode = recurse(l1, l2);

  console.log(val1, val2);

  let total = val1 + val2 + remainer;
  if (total >= 10) {
    remainer += Math.floor(total / 10);
    total = total % 10;
  }

  //
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  return recurse(l1, l2)[0];
};
