const mySymbol1 = Symbol.for('sym1');
console.log(Symbol.keyFor(mySymbol1)); // sym1

const mySymbol2 = Symbol('sym2');
console.log(Symbol.keyFor(mySymbol2)); // undefined