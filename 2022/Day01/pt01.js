// How many Calories are being carried by the Elf carrying the most Calories???
import {readFileSync} from 'node:fs';

const data = readFileSync("./input.txt", {encoding: 'utf-8'});

const numberGroups = data.split(/\n\s*\n/);

const getSumOfGroup = (group) => {
    return group.split(/\r?\n/).map(Number).reduce((acc, num) => acc + num, 0);
}

const ans = Math.max(...numberGroups.map(getSumOfGroup));

console.log(ans);