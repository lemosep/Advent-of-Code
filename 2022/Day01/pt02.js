import { readFileSync } from "node:fs";

let s = readFileSync("./input.txt", { encoding: "utf-8" });

let split = s.split(/\r?\n/g);

let elves = [];
let count = 0;
for (let i = 0; i < split.length; i++) {
  if (split[i].length > 2) {
    if (elves[count] == undefined) {
      elves[count] = 0;
    }
    elves[count] += Number(split[i]);
  } else {
    count++;
  }
}

elves.sort(function (a, b) {
  return b - a;
});

console.log(elves);

let ans = 0;
for (let i = 0; i < 3; i++) {
  console.log(elves[i]);
  ans += elves[i];
}

console.log(ans);
