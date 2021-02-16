/**
 * This week’s question:
 * Given a string str and a dictionary dict containing
 * a list of non-empty words, add spaces in str to construct
 * a “sentence” where each word is a valid word in dict.
 * Return all possible sentences. You are allowed to reuse
 * the words in dict.
 */

const { difference } = require("lodash");

function makeSentence(str, dict) {
  const sentences = [];
  findSentences([], str);

  function findSentences(base, strLeft) {
    // Base case, if entire str used up, add sentence to "sentences"
    if (strLeft.length === 0) {
      sentences.push(base);
    }

    dict
      // Find words at the beginning of this section
      .filter((word) => strLeft.indexOf(word) === 0)
      // Recursively find the next word
      .map((word) => {
        const nextBase = base.concat(word);
        const nextStrLeft = strLeft.slice(word.length, strLeft.length);
        return findSentences(nextBase, nextStrLeft);
      });
  }

  // Join each sentences with spaces & return
  return sentences.map((sentence) => sentence.join(" "));
}

function testSolution() {
  const str = "penpineapplepenapple";
  const dict = ["apple", "pen", "applepen", "pine", "pineapple"];
  const expected = [
    "pen pine apple pen apple",
    "pen pineapple pen apple",
    "pen pine applepen apple",
  ];

  const result = makeSentence(str, dict);

  const differences = [
    ...difference(result, expected),
    ...difference(expected, result),
  ];
  const prefix = differences.length === 0 ? "✔" : "✘";
  return console.log(`${prefix} expected ${expected}, got ${result}`);
}

testSolution();
