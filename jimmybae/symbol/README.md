## Symbol
### 6개의 타입(자료형)
#### 기본 자료형 (Primitive data type)
1. Boolean
2. null
3. undefined
4. Number
5. String
#### 객체형 (Object type)
6. Object

### Symbol
애플리케이션 전체에서 유일 (같은 description을 가지고 있더라도 다른 심볼)  
변경 불가능한(immtuable) 기본 자료형(primitive)  
객체의 property key로 주로 사용

### 기본문법
Symbol() 함수를 통해 생성, 새로운 symbol값이 생성  
래퍼 객체를 생성하는 생성자 함수와 달리 new를 사용하지 않는다.  
디버깅 용도로 optional한 문자열 description을 사용한다.
symbol값은 다른 어떤 값과도 다르기 때문에 property의 key로 사용
symbol을 키로 갖는 속성은 다른 어떤 속성과도 충돌하지 않는다.  
symbol을 키로 갖는 속성은 dot을 사용해서 접근할 수 없다.
```js
Symbol([description]);
```
```js
const mySymbol1 = Symbol();
const mySymbol2 = Symbol('description');
const mySymbol3 = Symbol('description');

console.log(mySymbol1); // Symbol()
console.log(typeof mySymbol1); // symbol
console.log(mySymbol2); // Symbol(description)
console.log(mySymbol3); // Symbol(description)
console.log(mySymbol2 === mySymbol3); // false

const obj = {};
obj[mySymbol1] = 1;
obj[mySymbol2] = 2;
obj[mySymbol3] = 3;
console.log(obj); // { [Symbol()]: 1, [Symbol(description)]: 2, [Symbol(description)]: 3 }

console.log(mySymbol1 in obj); // true

console.log(obj[mySymbol1]); // 1
console.log(obj[mySymbol2]); // 2
console.log(obj[mySymbol3]); // 3

console.log(obj.mySymbol3); // undefined

const str = new String();
console.log(str); // [String: '']
console.log(typeof str); // object
```
### Well-known Symbol
1. Symbol.iterator
객체의 iterator를 반환, for...of문 내부적으로 사용
```js
// iterable : array에는 Symbol.iterator를 key로 하는 메서드가 구현되어 있음
const iterable = [1, 2];
console.log(Object.getOwnPropertySymbols(iterable.__proto__)); // [ Symbol(Symbol.iterator), Symbol(Symbol.unscopables) ]

// iterator : iterable의 Symbol.iterator를 property key로 사용한 메소드는 iterator를 반환
const iterator1 = iterable[Symbol.iterator]();
console.log(iterator1.next()); // { value: 1, done: false }
console.log(iterator1.next()); // { value: 2, done: false }
console.log(iterator1.next()); // { value: undefined, done: true }

const iterator2 = iterable[Symbol.iterator]();
// for-of
for(const value of iterator2) {
  console.log(value); // 1 // 2
}
```
### functions
#### Symbol.for
Symbol 레지스트리에서 'sym'이름으로 만들어진 Symbol을 검색  
있다면 Symbol 반환, 없다면 새로운 Symbol생성  
여러 개의 모듈에서 symbol을 공유해야 하는 경우 사용
```js
// 새로운 Symbol 생성
const mySymbol1 = Symbol.for('sym');
console.log(mySymbol1); // Symbol(sym)
// 검색된 Symbol 반환
const mySymbol2 = Symbol.for('sym');
console.log(mySymbol2); // Symbol(sym)
console.log(mySymbol1 === mySymbol2); // true
```
#### Symbol.keyFor
입력받는 Symbol을 통해 symbol key를 가져온다. (Symbol.for()에 의해서 생성 되었을때)
```js
const mySymbol1 = Symbol.for('sym1');
console.log(Symbol.keyFor(mySymbol1)); // sym1

const mySymbol2 = Symbol('sym2');
console.log(Symbol.keyFor(mySymbol2)); // undefined
```

### Reference
[Symbol - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)  
[ECMAScript6 - Symbol | PoiemaWeb](http://poiemaweb.com/es6-symbol)  
[ES6 In Depth: 심볼 (Symbol) ★ Mozilla 웹 기술 블로그](http://hacks.mozilla.or.kr/2015/09/es6-in-depth-symbols/)