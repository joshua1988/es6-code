function multiply(x, y) {
  x = x || 1;
  y = y || 1;
  return x * y;
}
console.log(multiply()); // 1
console.log(multiply(3)); // 3
console.log(multiply(3, 3)); // 9