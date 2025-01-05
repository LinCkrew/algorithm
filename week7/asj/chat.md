# 자바스크립트 함수 실행 순서와 동작 방식 이해하기

## 1. 문제 상황

```javascript
console.log('기본 거품 정렬:', bubbleSort(arr1));
```

위 코드의 실행 순서와 출력 결과가 예상과 달랐던 상황 분석

## 2. 함수 실행 순서의 이해

### 2.1 호출 시점 평가 (Call-time evaluation)

- 함수의 인자가 먼저 평가된 후, 함수가 실행됨
- 실행 순서:
  1. `bubbleSort(arr1)` 실행
  2. bubbleSort 내부의 `console.log` 실행
  3. 정렬된 배열 반환
  4. 최종적으로 메인 `console.log` 실행

### 2.2 실제 동작 예시

```javascript
// 이 한 줄의 코드는
console.log('기본 거품 정렬:', bubbleSort(arr1));
// 실제로는 이렇게 동작
const sortedArray = bubbleSort(arr1); // 이 때 bubbleSort 내부의 console.log도 실행
console.log('기본 거품 정렬:', sortedArray);
```

## 3. console.log의 동작 방식

### 3.1 단일 vs 다중 인자

```javascript
// 한 줄로 출력 (공백으로 구분)
console.log('기본 거품 정렬:', arr); // 출력: 기본 거품 정렬: [1,2,3]
// 두 줄로 출력 (각각 줄바꿈)
console.log('기본 거품 정렬:'); // 출력: 기본 거품 정렬:
console.log(arr); // 출력: [1,2,3]
```

## 4. 실행 컨텍스트와 콜 스택

1. `bubbleSort` 함수가 콜 스택에 추가
2. `bubbleSort` 내부의 `console.log` 실행
3. `bubbleSort` 완료 및 스택에서 제거
4. 메인 `console.log` 실행

## 5. 비동기 처리와의 차이점

- 현재 코드는 모두 동기(Synchronous) 실행
- 비동기 함수의 경우 다른 처리 방식 필요:

```javascript
// 비동기 함수의 경우
async function bubbleSort(arr) {
  await someOperation();
  return sortedArray;
}
// 처리 방법
const result = await bubbleSort(arr1);
console.log('기본 거품 정렬:', result);
```

## 6. 주의할 점

1. 함수 인자는 항상 함수 실행 전에 평가됨
2. `console.log`의 다중 인자는 한 줄에 공백으로 구분되어 출력
3. 함수 내부의 `console.log`는 해당 함수가 실행될 때 즉시 동작

## 7. 개선된 코드 제안

원하는 출력 순서를 얻기 위한 수정:

```javascript
console.log('기본 거품 정렬:');
const result = bubbleSort(arr1);
console.log(result);
```

이 문서는 자바스크립트의 함수 실행 순서와 동작 방식에 대한 이해를 돕기 위한 참고 자료로 활용할 수 있습니다.
