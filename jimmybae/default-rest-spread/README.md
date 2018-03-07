## Default, Rest, Spread
### Default function parameter
매개변수 값이 없거나 undefined가 전달되면 기본값으로 초기화 한다.
- ES5
```js
function multiply(x, y) {
  x = x || 1;
  y = y || 1;
  return x * y;
}
console.log(multiply()); // 1
console.log(multiply(3)); // 3
console.log(multiply(3, 3)); // 9
```
- ES6
```js
const multiply = (x = 1, y = 1) => x * y;
console.log(multiply()); // 1
console.log(multiply(3)); // 3
console.log(multiply(3, 3)); // 9
```

### Rest parameter
인수를 함수 내부에서 배열로 전달받음
#### 기본문법
- ES5
```js
function abc(x, y) {
  var args = Array.prototype.slice.call(arguments, abc.length);
  console.log(x);
  console.log(y);
  console.log(args);
}
abc(1, 2, 3, 4, 5);
// 1
// 2
// [ 3, 4, 5 ]
```
- ES6
```js
const abc = (x, y, ...args) => {
  console.log(x);
  console.log(y);
  console.log(args);
}
abc(1, 2, 3, 4, 5);
// 1
// 2
// [ 3, 4, 5 ]
```
### spread operator
대상 array 또는 iterable을 개별 요소로 분리
#### 기본문법
```js
const array = [1, 2, 3];
console.log(...array); // 1 2 3
const iterable = 'jimmy';
console.log(...iterable); // j i m m y
```
#### 함수인자 사용
```js
const xyz = (x, y, z) => {
  console.log(`x : ${x}`);
  console.log(`y : ${y}`);
  console.log(`z : ${z}`);
}
const array1 = [1, 2, 3];
xyz(...array1);
// x : 1
// y : 2
// z : 3
const array2 = [4, 5, 6];
xyz(...array2);
// x : 4
// y : 5
// z : 6
```
#### 배열 사용
- ES5
```js
var array1 = [1, 2];
console.log(array1.concat([3, 4])); // [ 1, 2, 3, 4 ]
```

- ES6
```js
const array2 = [1, 2];
console.log([...array2, 3, 4]); // [ 1, 2, 3, 4 ]
```

### Reference
[기본 매개변수 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)  
[나머지 매개변수 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)  
[Spread syntax - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)  
[ECMAScript6 - Extended Parameter Handling | PoiemaWeb](http://poiemaweb.com/es6-extended-parameter-handling)