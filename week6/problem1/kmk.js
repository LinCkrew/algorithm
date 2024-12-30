let [N, ...input] = require('fs')
  .readFileSync('../../dev/stdin/index.txt')
  .toString()
  .trim()
  .split('\n');

let lineHeights = input.map(Number);
let stack = [];
let result = 0;

for (let height of lineHeights) {
  let count = 1;

  // 스택에 현재 사람보다 작거나 같은 키를 제거하면서 쌍 계산
  while (stack.length > 0 && stack[stack.length - 1][0] <= height) {
    let [prevHeight, prevCount] = stack.pop();
    result += prevCount;

    // 현재 키와 같다면 합치기
    if (prevHeight === height) {
      count += prevCount;
    }
  }

  // 스택이 비어 있지 않다면 볼 수 있는 쌍 추가
  if (stack.length > 0) {
    result++;
  }

  // 현재 키와 카운트를 스택에 추가
  stack.push([height, count]);
}

console.log(result);
