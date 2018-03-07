const abc = (x, y, ...args) => {
  console.log(x);
  console.log(y);
  console.log(args);
}
abc(1, 2, 3, 4, 5);
// 1
// 2
// [ 3, 4, 5 ]

const def = (...args) => {
  console.log(args);
}
def(1, 2, 3, 4, 5);
// [1, 2, 3, 4, 5]