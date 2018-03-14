## Promise
콜백 패턴의 단점을 보완하며 비동기 처리 시점을 명확하게 표현한다.
#### 콜백 패턴의 단점
1. 비동기 처리 중 발행한 에러의 예외처리가 힘듬.
2. 여러 개의 비동기 로직을 한꺼번에 처리하는데 한계가 있음.

### Promise 상태
![Promise process](https://camo.githubusercontent.com/9023e810c893e78306d8dc14d3308ea847aeead0/68747470733a2f2f63646e2e7261776769742e636f6d2f5665637461696f2f61373633333062303235626166396263646630376362343665356139656639652f7261772f323663343231336139336465653163333936313164636430656331323632353831316232306132362f6a732d70726f6d6973652e737667)

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
  if(num === 0 ) {
    throw 'zero';
  } else if(num % 2 == 0) {
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
/*
[num] 0
[rejected] zero
[catch]    zero
*/
/*
[num] 2
[fulfilled] even number
*/
/*
[num] 3
[rejected] odd number
[catch]    odd number
*/
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
    console.log(values); // [1, 2, 'setTimeout Resolve']
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