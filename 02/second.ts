import * as fs from "fs/promises";

const input = await fs.readFile("02/input.txt", "utf8");
const lines = input.split("\n");
const games = lines.map((line) => line.split(" "));

// X - loss
// Y - draw
// Z - win

const matchPoints = {
  X: 0, //rock
  Y: 3, //paper
  Z: 6, //scissors
};

const symbols = ["A", "B", "C"];
let points = 0;
let c = 0;

for (const game of games) {
  let [elf, player] = game;
  let playerSymbol = elf;

  points += matchPoints[player as keyof typeof matchPoints];

  let counter = symbols.findIndex((s) => s === elf) + 1;
  if (player === "X") counter -= 1;
  if (player === "Z") counter += 1;
  counter = counter % 3;
  if (counter === 0) points += 3;
  points += counter;
}
console.log(points);
export {};
