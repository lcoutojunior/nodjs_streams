import {readFileSync } from 'fs'

//I put the toString() to to see the contents.
const file = readFileSync('bigfile').toString();

console.log(file);