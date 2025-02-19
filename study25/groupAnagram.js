import { test } from '../utils/basicUtils.js';

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramMap = new Map();
  const result = [];

  // sort each letter
  strs.forEach((str) => {
    // make words into array
    const key = str.split('').sort().join('');
    // check if it exist in the map
    if (!anagramMap.has(key)) {
      anagramMap.set(key, [str]);
    } else {
      anagramMap.get(key).push(str); // unsure if I can do that
    }
  });

  // return it into an array
  for (const val of anagramMap.values()) {
    result.push(val);
  }

  return result;
};

const testInputs = [
  [
    ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
  ],
  [[''], [['']]],
  [['a'], [['a']]],
];

testInputs.forEach((item) => {
  const [input, expected] = item;
  test(groupAnagrams(input), expected, false);
});
