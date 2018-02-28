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

// destructuring assignmet
const [first, second, third, ...rest] = iterable;
console.log(first, second, third, rest); // j i m [ 'm', 'y' ]
