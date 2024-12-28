const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin/index.txt')
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const heights = input.map(Number);

let count = 0;
const stack = [];

for (let i = 0; i < N; i++) {
  // 현재 사람보다 키가 작은 사람들은 제거하면서 카운트
  while (stack.length > 0 && stack[stack.length - 1][0] < heights[i]) {
    count += stack.pop()[1];
  }

  // 같은 키를 가진 사람들 처리
  if (stack.length > 0 && stack[stack.length - 1][0] === heights[i]) {
    const [height, cnt] = stack.pop();
    count += cnt;
    if (stack.length > 0) count++;
    stack.push([height, cnt + 1]);
  } else {
    if (stack.length > 0) count++;
    stack.push([heights[i], 1]);
  }
}

console.log(count);
