## Spread Syntax
- expand the array into its elements

## 사용하는 이유?
- ES5의 apply()를 사용하지 않고도 특정 상황에서 간단하게 구현 가능

#### ES5 vs ES6
- 배열의 각 요소에 함수를 적용하고 싶은 경우

```js
// ES5 - apply() 사용
function log(a, b, c) {
	console.log('first arg :', a);
	console.log('second arg :', b);
	console.log('third arg :', c);
}

var arr = [1,2,3];
log.apply(null, arr);
```

```js
// ES6 - ... 사용
function log(a, b, c) {
	console.log('first arg :', a);
	console.log('second arg :', b);
	console.log('third arg :', c);
}

var arr = [1,2,3];
log(...arr);
```

## 배열 리터럴
- 기존 배열의 요소를 복제할 때 사용

```js
var arr = [1,2,3];
var arr2 = [...arr];
console.log(arr2); // [1,2,3];
```

- 두 배열을 합칠 때 사용

```js
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

## 객체 리터럴
- 기존 객체의 요소를 복제하거나 합칠 때 사용

```js
// 복제
var obj = {a: 10, b: 20};
var clonedObj = {...obj1};

// 병합
var mergedObj = {...obj1, c: 30};
console.log(mergedObj); // {a: 10, b: 20, c: 30}
```
