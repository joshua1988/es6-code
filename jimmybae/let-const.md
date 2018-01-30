## let & const
### var
1. function-level scope
2. var keyword 생략 허용 : 변수 전역화
3. 중복 선언 허용 : 변수값 변경
4. Variable Hoisting : 선언전 참조 가능

### let
1. block-level scope
```js
console.log(abc); // undefined
var abc = 123;
console.log(abc); // 123
{
  var abc = 456;
}
console.log(abc); //456
```
```js
let abc = 123;
{
  let abc = 456;
  let def = 456;
}
console.log(abc); // 123
console.log(def); // ReferenceError: def is not defined
```

2. 중복 선언 X
```js
var abc = 123;
var abc = 456;

let def = 123;
let def = 456; // SyntaxError: Identifier 'def' has already been declared
```

3. Variable Hoisting
```js
// var : Declaration (scope) + Initialization (scope) -> Assignment (variable)
console.log(abc); // undefined
var foo;

// let : Declaration (scope) -> Initialization (variable) -> Assignment (variable)
console.log(def); // ReferenceError: def is not defined
let def;
```

4. 클로저
```js
var str = ['aaa', 'bbb', 'ccc'];
// i는 전역변수
for (var i = 0; i < str.length; i++) {
  setTimeout(function () {
    console.log(str[i]);
  }, i * 1500);
}
// undefined
// undefined
// undefined
```
```js
var str = ['aaa', 'bbb', 'ccc'];
// i 전역변수
for (var i = 0; i < str.length; i++) {
  (function (index) { // index 자유변수
    setTimeout(function () {
      console.log(str[index]);
    }, i * 1500);
  }(i));
}
// aaa
// bbb
// ccc
```
```js
var str = ['aaa', 'bbb', 'ccc'];
// i for 지역변수, 자유변수
// for 생명주기가 종료해도 변수 i를 사용하는 함수가 존재하는 한 계속 유지
for (let i = 0; i < str.length; i++) {
  setTimeout(function () {
    console.log(str[i]);
  }, i * 1500);
}
// aaa
// bbb
// ccc
```

### const
1. declaration, initialization
```js
const abc = 123;
abc = 456; // TypeError: Assignment to constant variable.

const def; // SyntaxError: Missing initializer in const declaration
```

2. Object type
```js
const number = {
  one: 1,
  two: 2
};

// number = {}; // TypeError: Assignment to constant variable.

// property value
number.one = 3;
console.log(number); // { one: 3, two: 2 }
```

### 정리
1. ES6에서는 var keyword 사용 X
2. 변경이 없는 기본형 변수, 객체형 변수 const사용
3. 변경이 필요한 기본형 변수 let사용
`기본형(primitive type)` Boolean, Null, Undefined, Number, String, Symbol