## Iteration protocols
1. **iterable** : `Symbol.iterator` property key로 사용하는 메서드 구현
2. **iterator** : iterable의 Symbol.iterator를 property key로 사용한 메서드는 iterator를 반환  
iterable의 요소를 탐색하기 위한 포인터로서 next() 메서드를 갖는 객체  
3. **next()** : iterator object의 next() 메서드를 호출하면 `value, done` property를 가지는 object가 반환  
`{ value: object, done: boolean }`
4. **for-of** : iterator의 next() 메서드 호출, done property가 true일 때까지 next() 메서드 호출

### custom iterable example
```js
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// iterable : Symbol.iterator property key로 사용하는 메서드 구현
// 순회 가능한 자료 구조
const seq = {
  [Symbol.iterator]() {
    let id = 0;
    return {
      next() {
        return id < 5 ?
        { value: ++id, done: false } :
        { value: undefined, done:true };
      }
    }
  }
};

// iterator : iterable의 Symbol.iterator를 property key로 사용한 메서드는 iterator를 반환
// iterable의 요소를 탐색하기 위한 포인터로서 next() 메서드를 갖는 객체
const idGen = seq[Symbol.iterator]();

console.log(new User(idGen.next().value, 'jimmy')); // User { id: 1, name: 'jimmy' }
console.log(new User(idGen.next().value, 'jin')); // User { id: 2, name: 'jin' }
console.log(new User(idGen.next().value, 'josh')); // User { id: 2, name: 'jin' }
console.log(new User(idGen.next().value, 'sunny')); // User { id: 4, name: 'sunny' }

// value, done property를 가진다.
console.log(idGen.next()); // { value: 5, done: false }
console.log(idGen.next()); // { value: undefined, done: true }

// for-of : iterator의 next()메서드 호출, done property가 true일 때까지 next() 메서드 호출
for(const value of seq) {
  console.log(value); // 1 // 2 // 3 // 4 // 5
}

// spread operator
console.log([...seq]); // [1, 2, 3, 4, 5]
```

### built-in iterables
prototype object가 Symbol.iterator 메서드를 가지고 있다.

#### 1. Array
```js
const iterable = [1, 2];
console.log(typeof iterable[Symbol.iterator]); // function

const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// for-of : iterator의 next()메서드 호출, done property가 true일 때까지 next()호출
for(const value of iterable) {
  console.log(value); // 1 // 2
}
```
#### 2. String
```js
const iterable = 'jimmy';
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // { value: 'j', done: false }
console.log(iterator.next()); // { value: 'i', done: false }
console.log(iterator.next()); // { value: 'm', done: false }
console.log(iterator.next()); // { value: 'm', done: false }
console.log(iterator.next()); // { value: 'y', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

for(const value of iterable) {
  console.log(value); // j // i // m // m // y
}

// spread operator
console.log([...iterable]); // [ 'j', 'i', 'm', 'm', 'y' ]

// destructuring assignmet : array의 value나 object의 property를 별개의 변수로 추출
const [first, second, third, ...rest] = iterable;
console.log(first, second, third, rest); // j i m [ 'm', 'y' ]
```
#### 3. Map
#### 4. Set
#### 5. DOM data structures

### generator object, iterator and iterable
```js
// generator
const generatorFnc = function* () {
  yield 1;
  yield 2;
};

// generator object
const genObj = generatorFnc();

// console.log(typeof generator);
// console.log(typeof genObj);

// iterator
console.log(typeof genObj.next); // function

// iterable
console.log(typeof genObj[Symbol.iterator]); // function

for(const value of genObj) {
  console.log(value); // 1 // 2
}
```
### Reference
[[ES6] 9. Iterator | Devlog](https://jaeyeophan.github.io/2017/04/21/ES6-9-Iterator/)  
[Iteration protocols - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)  
[ECMAScript6 - Iteration protocol & for-of | PoiemaWeb](http://poiemaweb.com/es6-iteration-for-of)