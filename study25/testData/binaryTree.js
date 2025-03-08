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
  { input: TreeNode.fromArray([]), expected: 0 },
  { input: TreeNode.fromArray([1]), expected: 1 },
  { input: TreeNode.fromArray([1, 2, 3]), expected: 3 },
  { input: TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8]), expected: 8 },
  {
    input: TreeNode.fromArray([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]),
    expected: 20,
  },
];

export const sortedArrayToBSTTest = [
  {
    input: [-15, -10, -3, 0, 5, 9],
    expected: TreeNode.fromArray([0, -10, 9, -15, -3, 5]),
  },

  {
    input: [1, 3],
    expected: TreeNode.fromArray([3, 1]),
  },

  {
    input: [1, 2, 3, 4, 5, 6, 7],
    expected: TreeNode.fromArray([4, 2, 6, 1, 3, 5, 7]),
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8],
    expected: TreeNode.fromArray([5, 3, 7, 2, 4, 6, 8, 1]),
  },
  {
    input: [-18, -14, -10, -3, 0, 1],
    expected: TreeNode.fromArray([-3, -14, 1, -18, -10, 0]),
  },
];

export const levelOrderTest = [
  { input: [3, 9, 20, null, null, 15, 7], expected: [[3], [9, 20], [15, 7]] },
  { input: [1], expected: [[1]] },
  { input: [0, -3, 9, -10, null, 5], expected: [[0], [-3, 9], [-10, 5]] },
];
