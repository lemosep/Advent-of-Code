import { readFileSync } from "node:fs";

let s = readFileSync("./input.txt", { encoding: "utf-8" });

let splitted = s.split(/\r\n/g);

let score = 0;
let valid = 0;

for (let i = 0; i < splitted.length; i++) {
  let spl = splitted[i].split(" ");

  let elve = spl[0];
  let user = spl[1];

  //elve is rock
  if (elve == "A") {
    if (user == "X") {
      //X for loss, picking scissors
      score += 3; //0 for loss, 3 for scissors, total 3
    } else if (user == "Y") {
      //Y for draw, also picking rock
      score += 4; //3 for draw, 1 for rock, total 4
    } else if (user == "Z") {
      //Z for win, picking paper
      score += 8; //6 for win, 2 for paper, total 8
    }
    //elve is paper
  } else if (elve == "B") {
    if (user == "X") {
      //X for loss, picking rock
      score += 1; //0 for loss, 1 for rock, total 1
    } else if (user == "Y") {
      //Y for draw, also picking paper
      score += 5; //3 for draw, 2 for paper, total 5
    } else if (user == "Z") {
      //Z for win, picking scissors
      score += 9; //6 for win, 3 for scissors, total 9
    }
    //elve is scissors
  } else if (elve == "C") {
    if (user == "X") {
      //X for loss, picking paper
      score += 2; //0 for loss, 2 for paper, total 2
    } else if (user == "Y") {
      //Y for draw, also picking scissors
      score += 6; //3 for draw, 3 for scissors, total 6
    } else if (user == "Z") {
      //Z for win, picking rock
      score += 7; //6 for win, 1 for rock, total 7;
    }
  }
}

console.log(score);
