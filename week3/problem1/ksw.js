
// 4659번 비밀번호 발음하기
// 실버 5
// https://www.acmicpc.net/problem/4659


const input = require('fs').readFileSync('./dev/stdin/index.txt').toString().trim().split('\n');


const gather = ['a', 'e', 'i', 'o', 'u']
const twiceGather = ['ee', 'oo']

const obj = {}

input.forEach(item => {
  if (!gather.some((element) => item.includes(element))) obj[item] = { result: `<${item}> is not acceptable.\n` }
  else obj[item] = { result: `<${item}> is acceptable.\n` }
  let twiceTemp = ''
  let tripleTemp = ''
  item.split('').some((element) => {
    const newTwiceTemp = twiceTemp + element
    if (newTwiceTemp === element.repeat(2) && !twiceGather.includes(newTwiceTemp)) {
      obj[item].result = `<${item}> is not acceptable.\n`
      return true
    } else {
      tripleTemp += element
      if (tripleTemp.length === 3) {
        const splitTripleTemp = tripleTemp.split('')
        const isTripleGather = splitTripleTemp.every((item) => gather.includes(item))
        const isTripleCons = splitTripleTemp.every((item) => !gather.includes(item))
        if (isTripleCons || isTripleGather) {
          obj[item].result = `<${item}> is not acceptable.\n`
          return true
        }
        tripleTemp = tripleTemp.slice(1)
      }
      twiceTemp = element
      return false
    }
  })
})
let resultSting = ''

const objKeys = Object.keys(obj)
objKeys.forEach((item, index) => {
  if (index !== objKeys.length - 1) resultSting += obj[item].result
})

console.log(resultSting)

