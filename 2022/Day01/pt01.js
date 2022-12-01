import { readFileSync } from "node:fs";

let s = readFileSync("./input.txt", { encoding: "utf-8" });

let split = s.split(/\r?\n/g);

let elves = [];
let count = 0; //keep track of how many elves we have.
for (let i = 0; i < split.length; i++) {
  if (split[i].length > 2) {
    if (elves[count] == undefined) elves[count] = 0;
    elves[count] += Number(split[i]);
  } else {
    count++;
  }
}

const max = Math.max(...elves);
console.log(max);
