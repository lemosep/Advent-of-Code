import { readFileSync } from "node:fs";

let s = readFileSync("./input.txt", { encoding: "utf-8" });

let split = s.split(/\r?\n/g);
let count = 0;

for (let i = 1; i < split.length; i++) {
  let prev = parseInt(split[i - 1]);
  let curr = parseInt(split[i]);
  if (prev < curr) {
    count++;
  }
}

console.log(count);
