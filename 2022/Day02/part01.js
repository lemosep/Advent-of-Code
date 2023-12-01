import {readFileSync} from 'node:fs';

const data = readFileSync("./input.txt", {encoding: 'utf-8'});

let splitted = data.split(/\r\n/g);

const gameValues = {                //creating nested object
  A: {X: 3, Y: 6, Z: 0},
  B: {X: 0, Y: 3, Z: 6},
  C: {X: 6, Y: 0, Z: 3},  
}          

const moveValues = {X: 1, Y: 2, Z: 3};


const getScore = (game) => {
  const [oppMove, playerMove] = game.split(" ");
  const gameScore = gameValues[oppMove] [playerMove];
  const moveScore = moveValues[playerMove];
  return (moveScore + gameScore);
}

const ans = splitted.map(getScore).reduce((acc, sum) => acc + sum);

console.log(ans);