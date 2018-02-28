const iterable = [1, 2];
console.log(typeof iterable[Symbol.iterator]); // function

const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// for-of : iterator의 next메소드 호출, done property가 true일 때까지 next호출
for(const value of iterable) {
  console.log(value); // 1 // 2
}