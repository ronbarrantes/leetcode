import { basicTest } from '../utils/basicUtils.js';

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let register = 0;
  let counter = 0;

  // I am going to count the letters first
  // I will recored the number of spaces moved
  // Increase the
};

const input1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
const expected1 = ['a', '2', 'b', '2', 'c', '3'];
basicTest(input1, compress(input1), expected1);

const input2 = ['a'];
const expected2 = ['a'];
basicTest(input2, compress(input2), expected2);

const input3 = [
  'a',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
];
const expected3 = ['a', 'b', '1', '2'];
basicTest(input3, compress(input3), expected3);
