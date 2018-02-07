## scope
- 변수에의 접근성(참조할수 있는)과 생존기간
- 선언위치에 의해 scope를 가진다.
- Global scope (anywhere)
- Local scope (함수내부)

### global scope
```js
var global = 'global';

function abc() {
  var local = 'local';
  console.log(global);
  console.log(local);
}
abc();

console.log(global);
console.log(local);
// global
// local
// global
// ReferenceError: local is not defined
```

1. implied global
```js
function abc() {
  global = 'global'; // var이 없으면 암묵적으로 전역변수
  var local = 'local';
}

abc();
console.log(global);
console.log(local);
// global
// ReferenceError: local is not defined
```

### function scope
1. global, local variable
```js
var global = 'global';
(function () { // Immediately-invoked function expression
  var local = 'local';
})();
console.log(global);
console.log(local);
// global
// ReferenceError: local is not defined
```

2. 중복선언
```js
// global scope
var x = 'global';
function abc() {
  // local scope
  var x = 'local';
  console.log(x);
}
abc();
console.log(x);
// local
// global
```

3. change global varable
```js
var x = 'global';
function abc() {
  x = 'in function';
  console.log(x);
}
abc();
console.log(x);
// in function
// in function
```

4. inner fnction
```js
var x = 'global';
function outer() {
  var x = 'local';
  console.log(1, x);

  // inner function은 자신을 포함하고 있는 외부함수의 변수에 접근
  // 실행 컨텍스트의 스코프 체인에 의해 참조 순위가 outer의 x를 참조
  function inner() {
    // x = 'inner';
    console.log(2, x);
  }
  inner();
  // console.log(1, x);
}
outer();
console.log(0, x);
// 1 "local"
// 2 "local"
// 0 "global"
```

### 변수명 중복
1. abc.js
```js
function abc() {
  i = 0;
  // some code
}
```
2. def.js
```js
for(var i = 0; i < 3; i++) {
  abc();
  console.log(i);
}
```
3. index.html
```html
<script src="abc.js"></script>
<script src="def.js"></script>
<!-- 무한반복 -->
// 0
// 0
// 0
// ...
```

### 정리
- 전역변수는 자제, 지역변수 사용
- 변수의 범위 스코프는 좁을수록 좋다.

1. 전역변수 객체 하나 사용
```js
var TEMP1 = {};
TEMP1.varable = {
  abc: 'abc',
  def: 'def',
};
console.log(TEMP1.varable.abc);
```

2. Immediately-invoked function
```js
(function() { // 실행후 전역에서 사라짐
  var TEMP2 = {};
  TEMP2.varable = {
    abc: 'abc',
    def: 'def'
  };
  console.log(TEMP2.varable.abc);
}());
console.log(TEMP2.varable.abc); // ReferenceError: TEMP2 is not defined
```

### Reference
[[자바스크립트] 유효범위(Scope)와 호이스팅(Hoisting) :: beomy](http://beomy.tistory.com/7?category=591557)  
[Javascript Scope | PoiemaWeb](http://poiemaweb.com/js-scope)