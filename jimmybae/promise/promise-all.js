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