import { strict as assert } from 'node:assert';
import colors from 'colors';
import BinaryTree from '../DataStructures/BinaryTree.js';

colors.setTheme({
  pass: ['green', 'bold'],
  fail: ['red', 'bold'],
});

/**
 * Add a number of spaces as a string
 * @param num The number of spaces to be added
 * @returns spaces*num
 */
export const addSpaces = (num) => {
  let space = '';
  for (let i = 0; i < num; i++) {
    space += ' ';
  }
  return space;
};

/**
 * Displays a linked list like an array
 * @param list The linked list
 * @returns a list [ item1, item2, ...item N]
 */
export const printLinkedList = function (list) {
  let arr = [];
  while (list) {
    arr = [...arr, list.val];
    list = list.next;
  }
  return arr;
};

let testNum = 1; // Creates a closure for the basicTest
/**
 * Logs a basic test with an input, an output and what's expected
 * @param input Raw input with no modifications
 * @param output The function with it's input, e.g. fn(input)
 * @param expected The expected output
 */

export const basicTest = (input, output, expected) => {
  const pass = `TEST #${testNum} | √ PASS`.pass;
  const fail = `TEST #${testNum} | X FAIL`.fail;

  const isPassing = output === expected;
  const result = isPassing ? pass : fail;

  console.log('|', result, '|', input, '|', output, '|', expected);
  console.log('+------------------+');
  testNum++;
};

const deepSort = (arr) => {
  if (!Array.isArray(arr)) return arr;
  return arr.map(deepSort).sort();
};

/**
 * Tests if the output matches the expected value.
 *
 * @param {any} output - The output to be tested.
 * @param {any} expected - The expected value to compare against.
 * @param {boolean} [maintainOrder=false] - Whether to consider the output and expected values as sorted.
 */

export const test = (output, expected, maintainOrder = true) => {
  const pass = `#${testNum} - √ PASS`.pass;
  const fail = `#${testNum} - X FAIL`.fail;

  output = maintainOrder ? output : deepSort(output);
  expected = maintainOrder ? expected : deepSort(expected);

  try {
    assert.deepStrictEqual(output, expected, 'Output ≠ Expected');
    console.log(`${pass} --> ${output}`);
  } catch (error) {
    console.error(`${fail} ---> ${output}::${expected}`, error.message);
  }

  console.log('+---------------------------+');
  testNum++;
};

/**
 * @param arr that represents the tree by level (Breadth First)
 * (Visit the link below for more info)
 * @link https://leetcode.com/problems/recover-binary-search-tree/discuss/32539/Tree-Deserializer-and-Visualizer-for-Python
 */
export const deserializeTree = (arr) => {
  if (arr.length === 0) return null;

  const nodes = arr.map((node) => {
    if (node === null) return null;
    else return new BinaryTree(node);
  });

  const kids = [...nodes].reverse();
  let root = kids.pop();

  for (const node of nodes) {
    if (node) {
      if (kids.length > 0) node.left = kids.pop();
      if (kids.length > 0) node.right = kids.pop();
    }
  }

  return root;
};

/**
 * Adds a divider on the console
 * @param string Adds a message
 */
export const spacer = (message = null) => {
  let space = '';
  if (message) space += `\n${message}\n`;
  space += '-------------------------';
  console.log(space);
};

/**
 * Test a function multiple times with an array of values
 * @param {function} testFunction Function to be tested
 * @param {string[]} array Array of values to be iterated over
 * @param {string} titleFlag A title to be given (just in case)
 */
export const testIterator = (testFunction, array, titleFlag = '') => {
  console.log(`###${titleFlag}###`);
  for (const item of array) {
    const testResult = testFunction(item);
    const resultColor = testResult ? 'bgGreen' : 'bgRed';
    const validationMessage = `-${testFunction(item)}-`.toUpperCase()[
      resultColor
    ].black;

    console.log(validationMessage, item);
  }
  console.log(``);
};
