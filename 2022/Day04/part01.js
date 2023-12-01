import { readFileSync } from "node:fs";

let s = readFileSync("./input.txt", { encoding: "utf-8" });

let splitted = s.split(/\r\n/g);

let ans = 0;

ans += parseInt(splitted.forEach(getAndCompare));

console.log(ans);

function getAndCompare(line) {
  //split line
  let result = 0;

  let commaSplit = line.split(",");

  //split lines by -
  let sector1 = commaSplit[0].split("-");
  let sector2 = commaSplit[1].split("-");

  let firstSectorValue0 = parseInt(sector1[0]);
  let firstSectorValue1 = parseInt(sector1[1]);

  let secondSectorValue0 = parseInt(sector2[0]);
  let secondSectorValue1 = parseInt(sector2[1]);

  if (
    firstSectorValue0 <= secondSectorValue0 &&
    firstSectorValue1 >= secondSectorValue1
  ) {
    result++;
  }

  return result;
}
