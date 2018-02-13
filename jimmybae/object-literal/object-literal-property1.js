var firstName = 'Bae';
var age = 40;
var jimmy = {
  firstName: firstName,
  age: age,
  toString: function() {
    return this.firstName + ' : ' + this.age;
  }
};
console.log(jimmy);
console.log(jimmy.toString());