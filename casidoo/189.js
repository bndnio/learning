/**
 * This week’s question:
 * Given a string, return true if the string represents a valid number.
 * A valid number can include integers, a ., -, or +.
 */

function isValidNumber(string) {
  if (!string || isNaN(string) || string.match(/[a-zA-Z]/g)) return false;
  return true;
}

function testSolution() {
  const testCases = [
    ["7", true],
    ["0011", true],
    ["+3.14", true],
    ["4.", true],
    ["-.9", true],
    ["-123.456", true],
    ["-0.1", true],
    ["abc", false],
    ["1a", false],
    ["e8", false],
    ["–6", false],
    ["-+3", false],
    ["95x54e53.", false],
    ["1e8", false],
    ["1E8", false],
    ["++3.14", false],
    ["4..", false],
    ["-..9", false],
    ["--.9", false],
    ["", false],
  ];

  for (let [input, expected] of testCases) {
    const result = isValidNumber(input);

    const prefix = expected === result ? "✔" : "✘";
    console.log(`${prefix} expected ${expected}, got ${result}`);
  }
}

testSolution();
