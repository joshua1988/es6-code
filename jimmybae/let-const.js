const number = {
  one: 1,
  two: 2
};

// number = {}; // TypeError: Assignment to constant variable.

// property value
number.one = 3;
console.log(number); // { one: 3, two: 2 }