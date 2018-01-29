let ga = 1000;
const gb = 2000;
{
  console.log('in block ga :', ga);
  console.log('in block gb :', gb);

  ga = 3000;

  console.log(a); // undefined
  var a = 100;
  let b = 200;
  // let b = 300; // SyntaxError: Identifier 'b' has already been declared
  const temp = a;
  a = b;
  b = temp;
  // tmp = 300; // TypeError: Assignment to constant variable.
}
console.log('ga : ', ga);
console.log('gb : ', gb);
console.log('a : ', a);

// console.log(b); // ReferenceError: b is not defined
// console.log(temp); // ReferenceError: tmp is not defined