## Proxy란?
- 객체에 정의되어 있는 기본 동작을 변경할 수 있는 객체
- 예시) 속성 탐색, 속성 할당, 함수 호출 등

## Proxy의 3가지 속성
- target : 프록시 대상 객체
- traps : 객체 접근시에 동작시킬 메서드
- handler : 프록시 대상 객체에 traps를 연결해주는 객체

```js
let handler = {
	get: function () {
		// 객체 속서에 접근할 때의 동작 정의
	}
};

let targetObject = {};
let p = new Proxy(targetObject, handler);
```

## Proxy 기초 예제
- 객체의 속성에 접근할 때의 동작을 정의

```js
let handler = {
	get: function (target, property) {
		console.log('Accessed property : ', property);
		console.log("Accessed property's value : ", target[property]);
	}
};

let targetObject = {
	num: 10,
	str: 'hi'
};

let p = new Proxy(targetObject, handler);
p.num;
```

- 객체의 속성 값을 할당할 때의 동작을 정의

```js
let handler = {
	set: function (target, property, value, receiver) {
		console.log('Allocated property : ', property);
		console.log("Assigned property's value : ", value);
	}
};

let targetObject = {
	num: 10,
	str: 'hi'
};

let p = new Proxy(targetObject, handler);
p.arr = [1,2,3];
```

## Proxy 응용 예제 - Read-only object
- Proxy를 이용하여 아래와 같이 읽기만 가능한 객체를 만들 수 있다.

```js
let handler = {
	set: function (target, property, value, receiver) {
		throw new Error('This object is read-only');
	}
};

const targetObject = {};

let p = new Proxy(targetObject, handler);
p.num = 10;
```

## Proxy 응용 예제 - Validator
- 위 예제와 비슷하게 값을 검증하는 로직도 가능하다.

```js
let handler = {
	set: function (target, property, value, receiver) {
		if (property === 'num') {
			if (!Number.isInteger(value)) {
				throw new TypeError('num is not an integer');
			}
			if (value > 100) {
				throw new RangeError('num is out of range');
			}
		}
		target[property] = value;

		return true;
	}
};

const targetObject = {};

let p = new Proxy(targetObject, handler);
p.num = 10; // 10
p.num = 200; // Uncaught RangeError: num is out of range
p.num = 'hi'; // Uncaught TypeError: num is not an integer
```
