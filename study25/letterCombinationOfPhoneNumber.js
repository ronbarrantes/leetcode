/**
 * @param {string} digits
 * @return {string[]}
 */

import { basicTest } from '../utils/basicUtils.js';

const digitMap = new Map([
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz'],
]);

// abc
// ghi

var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const result = [];
  const traverse = (digits, pt = 0) => {
    // base
    // choose
    // explore
    // unchoose
  };

  traverse(digits);
  return result;
};

const input1 = '23';
const result1 = letterCombinations(input1);
const expected1 = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

//basicTest(input1, result1, expected1);
basicTest('3', '3', '3');
