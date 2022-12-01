import { readFileSync } from "node:fs";

let s = readFileSync("./Day02/input2.txt", { encoding: "utf-8" });

//create split string to storage each input line
let str = s.split(/\r?\n/g);

//create variables
let foward = 0,
  depth = 0;

//for loop for the length of str
for (let i = 1; i < str.length; i++) {
  //split string by space
  let curr = str.split(" ");

  //switch case to control expressions
  switch (curr[0]) {
    case "forward":
      foward += parseInt(curr[1]);
      break;
    case "down":
      depth += parseInt(curr[1]);
      break;
    case "up":
      depth -= parseInt(curr[1]);
    default:
      console.log("d'fuck you mean?");
  }

  //ans will storage the forward value * depth value, which is our answer
  let ans = foward * depth;
  console.log(ans);
}
