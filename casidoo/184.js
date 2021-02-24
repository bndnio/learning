/**
 * This week’s question:
 * Given a string str containing only the characters x and y,
 * change it into a string such that there are no matching
 * adjacent characters. You’re allowed to delete zero or more
 * characters in the string. Find the minimum number of required deletions.
 */

function shortenWord(word) {
  const characters = [...word];

  const dedupedWord = characters.filter((c, i, arr) => {
    const lastChar = arr[i - 1];

    // Always keep first character
    if (i === 0) return true;
    // Filter out (false) when characters are the same
    return c !== lastChar;
  });

  return dedupedWord.join("");
}

function testSolution() {
  const word = "xxyxxy";
  const expected = "xyxy";

  const result = shortenWord(word);

  const prefix = expected === result ? "✔" : "✘";
  return console.log(`${prefix} expected ${expected}, got ${result}`);
}

testSolution();
