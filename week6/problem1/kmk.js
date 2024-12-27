// 후위 표기법: 연산자가 피연산자 뒤에 위치
// ABC*+DE/-

let input = require('fs')
  .readFileSync('../../dev/stdin/index.txt')
  .toString()
  .trim()
  .split('\n');
const N = input.shift();
let postfixNotation = input.shift().trim().split('');
let values = input.map(Number);

let stack = [];

postfixNotation.forEach((el) => {
  if (['+', '-', '*', '/'].includes(el)) {
    const num2 = stack.pop(); // 왼쪽
    const num1 = stack.pop(); // 오른쪽
    let result;
    if (el === '+') result = num1 + num2;
    else if (el === '-') result = num1 - num2;
    else if (el === '*') result = num1 * num2;
    else if (el === '/') result = num1 / num2;
    stack.push(result);
  } else {
    stack.push(values[el.charCodeAt(0) - 'A'.charCodeAt(0)]);
  }
});

const result = stack.pop();
console.log(result.toFixed(2));
