/**
 * This week’s question:
 * Given a string str containing only the characters x and y,
 * change it into a string such that there are no matching
 * adjacent characters. You’re allowed to delete zero or more
 * characters in the string. Find the minimum number of required deletions.
 */

function shortenWord(word) {
  return word
    .split("")
    .reduce((acc, c) => (acc.endsWith(c) ? acc : acc + c), "");
}

function testSolution() {
  const word = "xxyxxy";
  const expected = "xyxy";

  const result = shortenWord(word);

  const prefix = expected === result ? "✔" : "✘";
  return console.log(`${prefix} expected ${expected}, got ${result}`);
}

testSolution();
