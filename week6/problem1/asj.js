const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin/index.txt')
  //   .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const heights = input.map(Number);

let count = 0;

for (let i = 0; i < heights.length; i++) {
  for (let j = i + 1; j < heights.length; j++) {
    if (heights[i] < heights[j]) {
      count += 1;
      break;
    } else {
      count += 1;
    }
  }
}

console.log(count);
