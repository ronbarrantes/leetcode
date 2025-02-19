/**
 * @param {number[]} height
 * @return {number}
 */

import { basicTest } from '../utils/basicUtils.js';

const container = (h, lo, hi) => (hi - lo) * Math.min(h[lo], h[hi]);

var maxArea = function (height) {
  let lo = 0;
  let hi = height.length - 1;
  let mostWater = 0;

  while (lo < hi) {
    mostWater = Math.max(mostWater, container(height, lo, hi));

    if (height[lo] < height[hi]) lo++;
    else hi--;
  }

  return mostWater;
};

const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expect1 = 49;

basicTest(input1, maxArea(input1), expect1);

const input2 = [1, 1];
const expect2 = 1;
basicTest(input2, maxArea(input2), expect2);
