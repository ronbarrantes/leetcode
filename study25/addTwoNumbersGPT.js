import ListNode from '../DataStructures/LinkedList.js';
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
  const helper = (l1, l2, carry) => {
    if (!l1 && !l2 && carry === 0) return null;

    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    const newCarry = Math.floor(sum / 10);
    const newNode = new ListNode(sum % 10);

    newNode.next = helper(l1 ? l1.next : null, l2 ? l2.next : null, newCarry);
    return newNode;
  };
  const result = helper(l1, l2, 0);
  return result;
};

const testInputs = [
  [
    [
      [1, 2, 3, 4],
      [9, 9],
    ],
    [0, 2, 4, 4],
  ],
  [
    [
      [9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9, 9],
    ],
    [8, 9, 9, 9, 0, 0, 0, 1],
  ],
];

testInputs.slice(1).forEach((item) => {
  const [input, expected] = item;
  const l1 = ListNode.arrayToLinkedList(input[0]);
  const l2 = ListNode.arrayToLinkedList(input[1]);
  const lExpected = ListNode.arrayToLinkedList(expected);

  const result = addTwoNumbers(l1, l2);
  test(result, lExpected);
  console.log(lExpected.displayAsArray());
});
