import { readFileSync } from "node:fs";

let s = readFileSync("./input.txt", { encoding: "utf-8" });

let splitted = s.split(/\r\n/g);

let score = 0;

for (let i = 0; i < splitted.length; i++) {
  let spt = splitted[i].split(" ");

  let elve = spt[0];
  let user = spt[1];

  if (elve === "A" && user === "X") {
    //1 for rock, 3 for draw, total 4
    score += 4;
  } else if (elve == "A" && user == "Y") {
    //2 for paper, 6 for win, total 8
    score += 8;
  } else if (elve == "A" && user == "Z") {
    //3 for scissor, 0 for loss, total 3
    score += 3;
  } else if (elve == "B" && user == "X") {
    //1 for rock, 0 for loss, total 1
    score += 1;
  } else if (elve == "B" && user == "Y") {
    //2 for paper, 3 for draw, total 5
    score += 5;
  } else if (elve == "B" && user == "Z") {
    //3 for scissor, 6 for win, total 9
    score += 9;
  } else if (elve == "C" && user == "X") {
    //1 for rock, 6 for win, total 7
    score += 7;
  } else if (elve == "C" && user == "Y") {
    //2 for paper, 0 for loss, total 2
    score += 2;
  } else if (elve == "C" && user == "Z") {
    //3 for scissors, 3 for draw, total 6
    score += 6;
  }
}

//print total score
console.log(score);
