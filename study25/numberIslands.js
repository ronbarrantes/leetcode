/**
 * @param {character[][]} grid
 * @return {number}
 */

import { test } from '../utils/basicUtils.js';

// 1 1 0 1 1 0
// 1 1 0 1 1 1
// 0 1 1 1 0 1

const canExplore = (grid, row, col) => {
  return (
    row >= 0 &&
    col >= 0 &&
    row < grid.length &&
    col < grid[0].length &&
    grid[row][col] === '1'
  );
};

// const explored = Array.from({ length: grid.length }, () =>
//    Array(grid[0].length).fill(false),
// );

var numIslands = function (grid) {
  let count = 0;
  const explore = (grid, row, col) => {
    if (!canExplore(grid, row, col)) return;

    grid[row][col] = '0';

    // x and y
    const directions = [
      [row - 1, col], // top
      [row, col - 1], // left
      [row + 1, col], // bottom
      [row, col + 1], // right
    ];

    for (let i = 0; i < directions.length; i++) {
      explore(grid, directions[i][0], directions[i][1]);
    }
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (canExplore(grid, row, col)) {
        explore(grid, row, col);
        count++;
      }
    }
  }

  return count;
};

const testInputs = [
  [
    [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ],
    1,
  ],
  [
    [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ],
    3,
  ],
  [
    [
      ['0', '1', '1', '1', '0', '1'],
      ['0', '1', '1', '1', '1', '1'],
      ['0', '1', '1', '1', '0', '1'],
      ['0', '1', '0', '0', '0', '0'],
      ['1', '1', '1', '1', '0', '1'],
      ['0', '0', '0', '1', '1', '1'],
    ],
    1,
  ],
];
testInputs.forEach((item) => {
  const [input, expected] = item;
  test(numIslands(input), expected);
});
