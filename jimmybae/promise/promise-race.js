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