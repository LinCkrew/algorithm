// 선택 정렬 (Selection Sort)

const arr1 = [12, 1, 3, 4, 22, 6]; // arr.length = 6
const arr2 = [5, 4, 3, 2, 1]; // arr.length = 5

function selectionSort(arr) {
  let indexMin;
  for (let x = 0; x < arr.length - 1; x++) {
    indexMin = x;
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < arr[indexMin]) {
        indexMin = y;
      }
    }
    [arr[x], arr[indexMin]] = [arr[indexMin], arr[x]];
  }
  return arr;
}

console.log(selectionSort(arr1));
console.log(selectionSort(arr2));