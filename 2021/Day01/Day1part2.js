import { readFileSync } from "node:fs";

let s = readFileSync("./input2.txt", { encoding: "utf-8" });

let split = s.split(/\r?\n/g);
let count = 0;
let arr = [];

for (let i = 0; i < split.length; i++) {
  let sum = 0;
  if (i + 3 >= split.length) break;

  sum = Number(split[i]) + Number(split[i + 1]) + Number(split[i + 2]);
  let sum2 = Number(split[i + 1]) + Number(split[i + 2]) + Number(split[i + 3]);

  if (sum2 > sum) {
    count++;
  }
}

console.log(count);
