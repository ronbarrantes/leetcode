/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const { basicTest } = require("../utils/basicUtils");

var groupAnagrams = function (strs) {
  const anagramMap = new Map();
  const result = [];

  // sort each letter
  strs.forEach((str) => {
    // make words into array
    const key = str.split("").sort().join("");
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

const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const expected1 = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
basicTest(input1, groupAnagrams(input1), expected1);

const input2 = [""];
const expected2 = [[""]];
basicTest(input2, groupAnagrams(input2), expected2);

const input3 = ["a"];
const expected3 = [["a"]];
basicTest(input3, groupAnagrams(input3), expected3);
