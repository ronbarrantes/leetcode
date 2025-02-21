import ListNode, { arrayToLinkedList } from '../DataStructures/LinkedList.js';
import { test } from '../utils/basicUtils.js';
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
  console.log(l1);
  console.log(l2);
};

const testInputs = [
  [
    [
      [1, 2, 3, 4],
      [9, 9],
    ],
    [0, 2, 4, 4],
  ],
];

testInputs.forEach((item) => {
  const [input, expected] = item;
  const l1 = arrayToLinkedList(input[0]);
  const l2 = arrayToLinkedList(input[1]);
  const lExpected = arrayToLinkedList(expected);

  test(addTwoNumbers(l1, l2), lExpected);
});
