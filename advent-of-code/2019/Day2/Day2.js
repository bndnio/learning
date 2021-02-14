// ----- IMPORTS -----
const fs = require("fs");

// ----- MAIN -----
const part = process.argv[2];
const filename = process.argv[3];

const part1Choices = [1, "1", "one", "One"];
const part2Choices = [2, "2", "two", "Two"];
const partChoices = part1Choices.concat(part2Choices);

const opcodeMap = {
  1: (p1, p2) => +p1 + +p2,
  2: (p1, p2) => +p1 * +p2
};

if (!validateParams()) return;

const intcode = loadFile(filename);

switch (getPartNumber()) {
  case 1:
    console.info("done");
    console.log("pos0: ", calculate([...intcode], 12, 2));
    break;
  case 2:
    const list100 = [...Array(100).keys()];
    for (let i in list100) {
      for (let j in list100) {
        console.log(
          `(${i}, ${j}) => ${calculate([...intcode], i, j)} ... ${100 * +i +
            +j}`
        );
      }
    }
}

function calculate(intcode, noun, verb) {
  intcode[1] = noun;
  intcode[2] = verb;
  for (let index in intcode) {
    if (index % 4 !== 0) continue;
    let opcode = intcode[+index + 0];
    let p1 = intcode[intcode[+index + 1]];
    let p2 = intcode[intcode[+index + 2]];
    let destIndex = intcode[+index + 3];

    if ([1, 2].includes(opcode)) {
      intcode[destIndex] = opcodeMap[opcode](p1, p2);
      continue;
    } else if (opcode == "99") {
      console.log("hit halting code 99 at index", index);
    } else {
      console.error(`invalid opcode (${opcode}) encountered at ${index}`);
      return;
    }
    return intcode[0];
  }
}

// ----- HELPER FUNCTIONS -----
function loadFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  return data.split(/\,/).map(num => +num);
}

// ----- CLI HELPERS -----
function validateParams() {
  if (!partChoices.includes(part)) {
    console.error(
      "Invalid part number, must be one of:",
      JSON.stringify(partChoices)
    );
    console.error(
      'Command format: "node Day1.js <partNumber> <inputFileName>"'
    );
    return false;
  }
  return true;
}

function getPartNumber() {
  if (part1Choices.includes(part)) return 1;
  if (part2Choices.includes(part)) return 2;
}
