## Default Function Parameters
- 함수 인자의 초기 값을 설정하는 문법

#### 기존 방식

```js
function multiply(a, b) {
	return a * b;
}

multiply(2, 2); // 4
multiply(2); // undefined
```

#### default 방식

```js
function multiply(a, b = 1) {
	return a * b;
}

multiply(2, 2); // 4
multiply(2); // 2
```

- 호출할 때 강제로 `undefined` 값을 넘겨도 설정된 default 값으로 초기화

```js
function multiply(a, b = 1) {
	return a * b;
}

multiply(2, undefined); // 2
```
