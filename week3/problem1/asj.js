const fs = require('fs');
const input = fs
  //   .readFileSync('./dev/stdin/index.txt')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// - 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
// - 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
// - 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.

const gather = ['a', 'e', 'i', 'o', 'u'];
const consonant = [
  'b',
  'c',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'v',
  'w',
  'x',
  'y',
  'z',
];

for (const item of input) {
  if (item === 'end') break;
  //   console.log(item);
  const letter = item.split('');
  //   console.log(letter); //[ 'p', 't', 'o', 'u', 'i' ]

  let pass = false;
  if (
    checkGather(letter) &&
    checkConsecutive(letter) &&
    checkThreeConsecutive(letter)
  ) {
    pass = true;
  }
  console.log(
    pass ? `<${item}> is acceptable.` : `<${item}> is not acceptable.`,
  );
  //   if (checkGather(letter)) {
  //     console.log(`<${item}> passed checkGather`);
  //   } else {
  //     console.log(`<${item}> failed checkGather`);
  //   }
  //   if (checkConsecutive(letter)) {
  //     console.log(`<${item}> passed checkConsecutive`);
  //   } else {
  //     console.log(`<${item}> failed checkConsecutive`);
  //   }
  //   if (checkThreeConsecutive(letter)) {
  //     console.log(`<${item}> passed checkThreeConsecutive`);
  //   } else {
  //     console.log(`<${item}> failed checkThreeConsecutive`);
  //   }
}

function checkGather(letter) {
  if (gather.some((gather) => letter.includes(gather))) {
    return true;
  }
  return false;
}

function checkConsecutive(letter) {
  for (let i = 0; i < letter.length - 1; i++) {
    if (letter[i] === letter[i + 1]) {
      if (['ee', 'oo'].includes(letter[i] + letter[i + 1])) {
        continue;
      }
      return false;
    }
  }
  return true;
}

function checkThreeConsecutive(letter) {
  for (let i = 0; i < letter.length - 2; i++) {
    if (
      gather.includes(letter[i]) &&
      gather.includes(letter[i + 1]) &&
      gather.includes(letter[i + 2])
    ) {
      return false;
    } else if (
      consonant.includes(letter[i]) &&
      consonant.includes(letter[i + 1]) &&
      consonant.includes(letter[i + 2])
    ) {
      return false;
    }
  }
  return true;
}
