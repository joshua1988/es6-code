function abc(x, y) {
  var args = Array.prototype.slice.call(arguments, abc.length);
  console.log(x);
  console.log(y);
  console.log(args);
}
abc(1, 2, 3, 4, 5);
// 1
// 2
// [ 3, 4, 5 ]