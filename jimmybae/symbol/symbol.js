const mySymbol1 = Symbol();
const mySymbol2 = Symbol('description');
const mySymbol3 = Symbol('description');

console.log(mySymbol1); // Symbol()
console.log(typeof mySymbol1); // symbol
console.log(mySymbol2); // Symbol(description)
console.log(mySymbol3); // Symbol(description)
console.log(mySymbol2 === mySymbol3); // false

const obj = {};
obj[mySymbol1] = 1;
obj[mySymbol2] = 2;
obj[mySymbol3] = 3;
console.log(obj); // { [Symbol()]: 1, [Symbol(description)]: 2, [Symbol(description)]: 3 }

console.log(mySymbol1 in obj); // true

console.log(obj[mySymbol1]); // 1
console.log(obj[mySymbol2]); // 2
console.log(obj[mySymbol3]); // 3

console.log(obj.mySymbol3); // undefined

const str = new String();
console.log(str); // [String: '']
console.log(typeof str); // object