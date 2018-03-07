// 새로운 Symbol 생성
const mySymbol1 = Symbol.for('sym');
console.log(mySymbol1); // Symbol(sym)
// 검색된 Symbol 반환
const mySymbol2 = Symbol.for('sym');
console.log(mySymbol2); // Symbol(sym)
console.log(mySymbol1 === mySymbol2); // true