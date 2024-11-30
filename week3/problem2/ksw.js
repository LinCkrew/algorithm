const input = require('fs').readFileSync('./dev/stdin/index.txt').toString().trim().split('\n');

const game = { Y: 2, F: 3, O: 4 }
const gameType = input[0].split(' ')[1]
const targetNum = game[gameType] - 1

const players = input.slice(1)
const playerSet = [...new Set(players)]

console.log(Math.floor(playerSet.length / targetNum))
