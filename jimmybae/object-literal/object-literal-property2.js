const firstName = 'Bae';
const age = 40;
const jimmy = {
  firstName,
  age,
  toString() {
    return this.firstName + ' : ' + this.age;
  }
};
console.log(jimmy);
console.log(jimmy.toString());