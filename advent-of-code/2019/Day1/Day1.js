// ----- IMPORTS -----
const fs = require("fs");

// ----- MAIN -----
const part = process.argv[2];
const filename = process.argv[3];

if (!validateParams()) return;

const masses = loadFile(filename);
const sum = masses
  .filter(mass => mass != 0)
  .map(mass => calculateModuleFuel(mass))
  .map(fuelMass =>
    getPartNumber() === 1 ? fuelMass : calculateFuelFuel(fuelMass)
  )
  .reduce((sum, fuel) => (sum += fuel), 0);

console.log("sum: ", sum);

// ----- HELPER FUNCTIONS -----
function loadFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  return data.split(/\r?\n/);
}

function calculateModuleFuel(mass) {
  return Math.floor(+mass / 3) - 2;
}

function calculateFuelFuel(fuelMass) {
  const fuelFuelMass = calculateModuleFuel(fuelMass);
  if (fuelFuelMass <= 0) return fuelMass;
  return fuelMass + calculateFuelFuel(fuelFuelMass);
}

// ----- CLI HELPERS -----
const part1Choices = [1, "1", "one", "One"];
const part2Choices = [2, "2", "two", "Two"];
const partChoices = part1Choices.concat(part2Choices);

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
