import { readFileSync } from "node:fs";

let s = readFileSync("./input.txt", { encoding: "utf-8" });

let rucksacks = s.split(/\r\n/g);

let ans = 0;

//3 in 3 rucksacks
for (let i = 0; i < rucksacks.length; i += 3) {
  let rucksack1 = rucksacks[i];
  let rucksack2 = rucksacks[i + 1];
  let rucksack3 = rucksacks[i + 2];

  //run through first rucksack, comparing wit da others
  for (let j = 0; j < rucksack1.length; j++) {
    let repeatedChar = rucksack1.charAt(j);

    if (rucksack2.includes(repeatedChar) && rucksack3.includes(repeatedChar)) {
      let repeated = rucksack1.charCodeAt(j);

      if (repeated >= 97 && repeated <= 122) {
        ans += repeated - 96;
        j = 0;
        break;
      } else if (repeated >= 65 && repeated <= 90) {
        ans += repeated - 38;
        j = 0;
        break;
      }
    }
  }
}
console.log(ans);
