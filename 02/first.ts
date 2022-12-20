import * as fs from "fs/promises";

const input = await fs.readFile("02/input.txt", "utf8");
const lines = input.split("\n");
const games = lines.map((line) => line.split(" "));

const translate = {
  X: "A", //rock
  Y: "B", //paper
  Z: "C", //scissors
};

const pointsTable = {
  X: 1, //rock
  Y: 2, //paper
  Z: 3, //scissors
};

let points = 0;

for (const game of games) {
  let [elf, player] = game;

  points += pointsTable[player as keyof typeof pointsTable];

  player = translate[player as "X" | "Y" | "Z"];

  if (elf === player) points += 3;
  if (elf === "A" && player === "B") points += 6;
  if (elf === "B" && player === "C") points += 6;
  if (elf === "C" && player === "A") points += 6;
}

console.log("points", points);

export {};
