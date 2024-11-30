const input = require('fs').readFileSync('./dev/stdin/index.txt').toString().trim().split('\n');

const words = input.slice(1)

class Stack {
  constructor() {
    this.arr = []
  }
  push(value) {
    this.arr.push(value)
  }
  check(value) {
    const { length } = this.arr
    if (length === 0) return false
    return this.arr[length - 1] === value
  }
  pop() {
    const { length } = this.arr
    if (length === 0) return
    this.arr.pop()
  }
}


let result = 0
words.forEach((word) => {
  const stack = new Stack()
  word.split('').forEach((char) => {
    if (stack.check(char)) stack.pop()
    else stack.push(char)
  })
  if (stack.arr.length === 0) result += 1
})

console.log(result)

