import * as fs from "fs/promises";

const input = await fs.readFile("03/input.txt", "utf8");
const lines = input.split("\n");

let prioritySum = 0;

const letterToPoints = (letter: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.indexOf(letter) + 1;
};

const firstHalf = (line: string) => {
  return line.slice(0, line.length / 2);
};

const secondHalf = (line: string) => {
  return line.slice(line.length / 2);
};

for (const line of lines) {
  const numericFirstHalf = firstHalf(line)
    .split("")
    .map((l) => letterToPoints(l));
  const numericSecondHalf = secondHalf(line)
    .split("")
    .map((l) => letterToPoints(l));

  let priority = 0;

  numericFirstHalf.forEach((n) => {
    if (numericSecondHalf.includes(n)) {
      priority = n;
    }
  });
  prioritySum += priority;
}

console.log(prioritySum);
