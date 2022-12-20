import * as fs from "fs/promises";

const input = await fs.readFile("01/input.txt", "utf8");

const lines = input.split("\n\n");
let highest = 0;

for (const line of lines) {
  const caloriesArray = line.split("\n").map((value) => parseInt(value, 10));
  const sum = caloriesArray.reduce((a, b) => a + b);

  sum > highest ? (highest = sum) : null;
}

console.log("highest", highest);

export {};
