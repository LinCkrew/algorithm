// 거품 정렬 (Bubble Sort)
const arr1 = [12, 1, 3, 4, 22, 6]; // arr.length = 6
const arr2 = [5, 4, 3, 2, 1]; // arr.length = 5

const bubbleSort = (arr) => {
  let swapCount = 0; // 스왑 발생 횟수
  let iterationCount = 0; // 전체 반복 횟수

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      iterationCount++; // 내부 반복문이 실행될 때마다 증가
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapCount++;
      }
    }
  }
  console.log(`반복 횟수: ${iterationCount}, 스왑 횟수: ${swapCount}`);
  return arr;
};

const OptimizedBubbleSort = (arr) => {
  let swapCount = 0; // 스왑 발생 횟수
  let iterationCount = 0; // 전체 반복 횟수

  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      iterationCount++; // 내부 반복문이 실행될 때마다 증가
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapCount++;
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  console.log(`반복 횟수: ${iterationCount}, 스왑 횟수: ${swapCount}`);
  return arr;
};

const testBubbleSort = () => {
  const testCases = [
    [12, 1, 3, 4, 22, 6],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [5, 5, 3, 3, 1],
  ];

  testCases.forEach((arr, index) => {
    const arr1 = [...arr];
    const arr2 = [...arr];

    console.log(`\n테스트 케이스 ${index + 1}: ${arr}`);
    console.log('기본 거품 정렬:', bubbleSort(arr1));
    console.log('최적화 거품 정렬:', OptimizedBubbleSort(arr2));
  });
};

testBubbleSort();
