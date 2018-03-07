const xyz = (x, y, z) => {
  console.log(`x : ${x}`);
  console.log(`y : ${y}`);
  console.log(`z : ${z}`);
}
const array1 = [1, 2, 3];
xyz(...array1);
// x : 1
// y : 2
// z : 3
const array2 = [4, 5, 6];
xyz(...array2);
// x : 4
// y : 5
// z : 6