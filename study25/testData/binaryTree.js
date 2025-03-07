import TreeNode from '../../DataStructures/BinaryTree.js';
export const diameterOfBinaryTreeTests = [
  {
    input: new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3)
    ),
    expected: 3,
  },
  {
    input: new TreeNode(1),
    expected: 0,
  },
  {
    input: new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(3, new TreeNode(4, new TreeNode(5), null), null),
        null
      ),
      null
    ),
    expected: 4,
  },
  {
    input: null,
    expected: 0,
  },
  {
    input: new TreeNode(1, new TreeNode(2), null),
    expected: 1,
  },
  {
    input: new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(
          3,
          new TreeNode(4, new TreeNode(5, new TreeNode(6), null), null),
          null
        ),
        null
      ),
      null
    ),
    expected: 5,
  },
  {
    input: new TreeNode(
      1,
      new TreeNode(
        2,
        null,
        new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))
      ),
      null
    ),
    expected: 4,
  },
  {
    input: new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(4, new TreeNode(7)),
        new TreeNode(5, null, new TreeNode(8))
      ),
      new TreeNode(3)
    ),
    expected: 4,
  },
];

export const binaryTreeMaximumPathTests = [
  {
    input: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    expected: 6,
  },
  {
    input: new TreeNode(
      -10,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    ),
    expected: 42,
  },
  {
    input: new TreeNode(2, new TreeNode(-1), new TreeNode(-2)),
    expected: 2,
  },
  {
    input: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    expected: 6,
  },
  {
    input: new TreeNode(
      -10,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    ),
    expected: 42,
  },
  {
    input: new TreeNode(2, new TreeNode(-1), new TreeNode(-2)),
    expected: 2,
  },
];

export const binaryTreePathsTests = [
  {
    input: TreeNode.fromArray([1, 2, 3, null, 5]),
    expected: ['1->2->5', '1->3'],
  },
  {
    input: new TreeNode(1),
    expected: ['1'],
  },
  {
    input: new TreeNode(
      1,
      new TreeNode(2),
      new TreeNode(3, new TreeNode(4), new TreeNode(5))
    ),
    expected: ['1->2', '1->3->4', '1->3->5'],
  },
];

export const hasPathSumTest = [
  {
    input: new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null),
      new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
    ),
    targetSum: 22,
    expected: true,
  },

  {
    input: TreeNode.fromArray([1, 2, 3]),
    targetSum: 5,
    expected: false,
  },

  {
    input: TreeNode.fromArray([1, 2, 3]),
    targetSum: 4,
    expected: true,
  },
  {
    input: TreeNode.fromArray([1, 2, 3]),
    targetSum: 2,
    expected: false,
  },

  {
    input: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    targetSum: 1,
    expected: false,
  },

  {
    input: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    targetSum: 3,
    expected: true,
  },
];

export const countNodesTest = [
  { input: TreeNode.fromArray([1, 2, 3, 4]), expected: 3 },
  { input: TreeNode.fromArray([1, 2, 3, 4, 5]), expected: 4 },
  { input: TreeNode.fromArray([1, 2, 3, 4, 5, 6]), expected: 5 },
  { input: TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7]), expected: 6 },
  { input: TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8]), expected: 7 },
  { input: TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]), expected: 8 },
  { input: TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), expected: 9 },
];
