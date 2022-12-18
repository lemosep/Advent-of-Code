import { log } from "node:console";
import { readFileSync } from "node:fs";

let s = readFileSync("./input.txt", { encoding: "utf-8" });

let rucksacks = s.split(/\r\n/g);

let ans = 0;

//for each rucksack, split and check for repeated items
for (let i = 0; i < rucksacks.length; i++) {
  //get half
  let middle = Math.floor(rucksacks[i].length / 2);

  //create substrings for compartments
  let compartment1 = rucksacks[i].substring(0, middle);
  let compartment2 = rucksacks[i].substring(middle);

  console.log("half 1 : " + compartment1);
  console.log("half 2 : " + compartment2);

  for (let j = 0; j < compartment1.length; j++) {
    let repeatedChar = compartment1.charAt(j);

    if (compartment2.includes(repeatedChar)) {
      let repeated = compartment1.charCodeAt(j);
      console.log("repeated:" + repeatedChar);
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
