import { readFileSync } from 'node:fs';

const data = readFileSync("./input.txt", {encoding: 'utf-8'});

const removeDoubledSpaces = data.split(/\n\s*\n/);

console.log(removeDoubledSpaces[1]);

