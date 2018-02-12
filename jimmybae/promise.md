## Promise
콜백 패턴의 단점을 보완 비동기 처리 시점을 명확하게 표현

### Promise 상태
- pending : 동작이 수행되지 않은 상태
- fulfilled : 동작이 수행된 상태 `성공`
- rejected : 동작이 수행된 상태 `실패`
- settled : 동작이 수행된 상태 `성공 or 실패`

### Promise prototype
#### 1. then
Promise.prototype.then(onFulfilled, onRejected)
```js
const p = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 10);
  console.log('[num]', num);
  if(num % 2 == 0) {
    resolve('even number');
  } else {
    reject('odd number');
  }
});

p.then(
  (value) => { console.log('[fulfilled]', value); },
  (reason) => { console.log('[rejected]', reason); }
);

p.catch((e) => { console.log('[catch]   ', e); });
```

### 2. catch
Promise.prototype.catch(onRejected)
```js
const p1 = new Promise((resolve, reject) => {
  throw 'Promise1';
});

p1.catch((e) => {
  console.log('[catch]', e);
});

// 비동기 콜백 내에 발생한 오류는 잡지 못함.(throw in setTimeout)
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw 'Promise2 setTimeout';
  }, 1000);
});

p2.catch((e) => {
  console.log('[catch]', e);
});
```

### Methods
#### 1. all
Promise.all(iterable)  
모든 promise의 상태가 fulfilled 또는 첫 rejected가 발생 했을때
```js
const p1 = Promise.resolve(1);
const p2 = 2;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('setTimeout Resolve');
  }, 1000)
});

Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values); // [3, 1337, "foo"]
});
```

#### 2. race
Promise.ract(iterable)  
처음으로 종료되는 promise를 반환
```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('setTimeout 3 second');
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('setTimeout 2 second');
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('setTimeout 1 second');
  }, 1000);
});

Promise.race([p1, p2, p3]).then(
  (value) => {
    console.log('[resolve]', value);
  },
  (reason) => {
    console.log('[reject]', reason);
  }
);
```

### Reference
[Promise로 콜백지옥 해결하기 :: beomy](http://beomy.tistory.com/11?category=591557)
[PoiemaWeb](http://poiemaweb.com/es6-promise)