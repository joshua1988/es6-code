## async 함수란?
- 비동기 처리 연산을 순서대로 처리할 수 있는 방법
- 비동기 처리 로직이 들어가는 함수
- async가 실행되면 Promise 객체를 반환
*Callback -> Promise -> Async*

## async 기본 문법

```js
async function 함수명(인자) {
	// 비동기 처리 로직
}
```

## async 반환 값은 Promise

```js
async function sum() {
	return 10;
}

sum(); // Promise {<resolved>: 10}
```

## async & await 예제

```js
function getNumber(num) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(num);
		}, 2000);
	});
}

async function sumNum() {
	const num1 = await getNumber(10);
	const num2 = await getNumber(20);

	return num1 + num2;
}

sumNum(); // Promise {<pending>}
sumNum().then(x => console.log(x));
```

## async를 왜 쓰는가?
비동기 처리 로직을 동기 처리 로직처럼 작성하기 위해

```js
// 프로미스를 사용한 여러 개의 비동기 연산 처리
function getNum() { return new Promise() }
function getString() { return new Promise() }
function getArray() { return new Promise() }
function getObject() { return new Promise() }

function printOut() {
	return getNum()
		.then(() => getString())
		.then(() => getArray())
		.then(() => getObject());
}

// await & async를 이용한 여러 개의 비동기 연산 처리
async function printOut() {
	const num = await getNum();
	const str = await getString();
	const arr = await getArray();
	const obj = await getObject();

	return num + str + arr + obj;
}
```
