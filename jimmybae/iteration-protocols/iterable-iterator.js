class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// iterable : Symbol.iterator property key로 사용하는 메소드 구현
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

// iterator : iterable의 Symbol.iterator를 property key로 사용한 메소드는 iterator를 반환
// iterable의 요소를 탐색하기 위한 포인터로서 next메소드를 갖는 객체
const idGen = seq[Symbol.iterator]();

console.log(new User(idGen.next().value, 'jimmy')); // User { id: 1, name: 'jimmy' }
console.log(new User(idGen.next().value, 'jin')); // User { id: 2, name: 'jin' }
console.log(new User(idGen.next().value, 'josh')); // User { id: 2, name: 'jin' }
console.log(new User(idGen.next().value, 'sunny')); // User { id: 4, name: 'sunny' }

// value, done property를 가진다.
console.log(idGen.next()); // { value: 5, done: false }
console.log(idGen.next()); // { value: undefined, done: true }

// for-of
for(const value of seq) {
  console.log(value); // 1 // 2 // 3 // 4 // 5
}

// spread operator
console.log([...seq]); // [1, 2, 3, 4, 5]