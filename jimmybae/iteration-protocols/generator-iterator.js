// generator
const generatorFnc = function* () {
  yield 1;
  yield 2;
};

// generator object
const genObj = generatorFnc();

// console.log(typeof generator);
// console.log(typeof genObj);

// iterator
console.log(typeof genObj.next); // function

// iterable
console.log(typeof genObj[Symbol.iterator]); // function

for(const value of genObj) {
  console.log(value); // 1 // 2
}