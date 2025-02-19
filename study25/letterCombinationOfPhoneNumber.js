/**
 * @param {string} digits
 * @return {string[]}
 */

import { test } from '../utils/basicUtils.js';

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

var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const result = [];
  const traverse = (pt = 0, res = []) => {
    // base
    if (pt === digits.length) {
      result.push([...res].join(''));
      return;
    }

    const currStr = digitMap.get(digits[pt]);
    for (let i = 0; i < currStr.length; i++) {
      // choose
      res.push(currStr[i]);
      // explore
      traverse(pt + 1, res);
      // unchoose
      res.pop();
    }
  };

  traverse();
  return result;
};

const testInputs = [
  ['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']],
  [
    '232',
    [
      'ada',
      'adb',
      'adc',
      'aea',
      'aeb',
      'aec',
      'afa',
      'afb',
      'afc',
      'bda',
      'bdb',
      'bdc',
      'bea',
      'beb',
      'bec',
      'bfa',
      'bfb',
      'bfc',
      'cda',
      'cdb',
      'cdc',
      'cea',
      'ceb',
      'cec',
      'cfa',
      'cfb',
      'cfc',
    ],
  ],
];

testInputs.forEach((item) => {
  const [input, expected] = item;
  test(letterCombinations(input), expected, true);
});
