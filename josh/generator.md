## Generators
- 일반적인 함수 호출과 다르게 함수 안에 정의된 로직을 원하는 시점에 실행, 반복, 중단할 수 있는 함수

## 선언 형식

```js
// 함수 이름 앞에 *
function *functionName() {
	yield // break point - 실행, 중단이 가능한 변수
}
```

## 특징
- 제너레이터를 생성해도 함수는 실행되지 않고 Generator 객체만 반환

```js
const numGen = numGenerator();
```

- `next()`를 실행했을 때 함수가 실행되고 해당 위치에서 context 보류

```js
numGen.next(); 첫 함수 실행
```

- 함수를 실행하거나 중단할 때 함수의 context는 항상 동일하게 유지됨

## 예제

```js
function* addNumbers(i, j) {
	yield i;
	yield j;
	yield i + j;
}

const gen = addNumbers(10, 20);

console.log(gen.next()); // {value: 10, done: false}
console.log(gen.next()); // {value: 20, done: false}
console.log(gen.next()); // {value: 30, done: false}
```

## ES5 vs ES6
- 지원하는 API의 차이만 있을 뿐 개념적으로는 차이가 없음

```js
const gen = generator();

// ES5
gen.next();
gen.close();
gen.send();
gen.throw();

// ES6
gen.next();
gen.throw();
```
