import * as fs from "fs/promises";

const input = await fs.readFile("03/input.txt", "utf8");
const lines = input.split("\n");

let prioritySum = 0;

const letterToPoints = (letter: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.indexOf(letter) + 1;
};

for (let i = 0; i < lines.length; i += 3) {
  const firstElf = lines[i].split("").map((l) => letterToPoints(l));
  const secondElf = lines[i + 1].split("").map((l) => letterToPoints(l));
  const thirdElf = lines[i + 2].split("").map((l) => letterToPoints(l));

  let priority = 0;

  firstElf.forEach((l) => {
    if (secondElf.includes(l)) {
      if (thirdElf.includes(l)) {
        priority = l;
      }
    }
  });
  prioritySum += priority;
}

console.log(prioritySum);
