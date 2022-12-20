import * as fs from "fs/promises";

const input = await fs.readFile("01/input.txt", "utf8");

const lines = input.split("\n\n");
let highest: number[] = [];

for (const line of lines) {
  const caloriesArray = line.split("\n").map((value) => parseInt(value, 10));
  highest.push(caloriesArray.reduce((a, b) => a + b));
}

highest.sort((a, b) => b - a);

console.log("highest", highest[0] + highest[1] + highest[2]);

export {};
