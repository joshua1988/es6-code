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