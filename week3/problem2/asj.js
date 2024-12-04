const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin/index.txt')
  //   .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
