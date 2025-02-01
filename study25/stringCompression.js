const { basicTest } = require("../utils/basicUtils");

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let p1 = 0;
  let p2 = 1;

  // distance between p2 and p1

  while (p2 < chars.length) {
    console.log([[p1, p2]]);

    if (chars[p1] !== chars[p2]) {
      // this is where the compression should happen

      // if the distance is less than 1

      if (p2 - p1 > 1) {
        console.log("compress");
        // compress
        chars.splice(p1 + 1, p2, `${p2 - p1}`);
        p1 = p1 + 1;
        p2 = p2 + 1;
        continue;
      }

      p1++;
      p2++;
    } else p2++;

    // things to check

    // if the next letter is the same as the current letter

    // if it is not then is it more than 1 of distance

    // if it is then compres
  }
};

const input1 = ["a", "a", "b", "b", "c", "c", "c"];
const expected1 = ["a", "a", "b", "b", "c", "c", "c"];
basicTest(input1, compress(input1), expected1);

basicTest(["a"], compress(["a"]), ["a"]);

const input2 = ["a"];
const expected2 = ["a"];
basicTest(input2, compress(input2), expected2);

const input3 = [
  "a",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
];
const expected3 = ["a", "b", "1", "2"];
basicTest(input3, compress(input3), expected3);
