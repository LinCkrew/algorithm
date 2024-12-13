const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin/index.txt')
  //   .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const operandNum = Number(input.shift()); // 5

const rpn = input.shift().trim().split(''); // [ 'A', 'B', 'C','*', '+', 'D','E', '/', '-']

const nums = input.map(Number); // [ '1', '2', '3', '4', '5' ]

const formula = ['+', '-', '*', '/'];
const stack = [];

for (elem of rpn) {
  if (!formula.includes(elem)) {
    const value = nums[elem.charCodeAt(0) - 65];
    stack.push(value);
  } else {
    const b = stack.pop();
    const a = stack.pop();

    let result;
    if (elem === '+') {
      result = a + b;
    } else if (elem === '-') {
      result = a - b;
    } else if (elem === '*') {
      result = a * b;
    } else if (elem === '/') {
      result = a / b;
    }
    stack.push(result);
  }
}

console.log(stack[0].toFixed(2));
