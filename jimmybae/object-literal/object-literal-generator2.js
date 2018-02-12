const jimmy = {
  firstName: 'Bae',
  age: 40,
  * ageAdder() {
    while(true) {
      yield ++this.age;
    }
  }
};
const ageAdderIterator = jimmy.ageAdder();
console.log(ageAdderIterator.next().value);
console.log(ageAdderIterator.next().value);
console.log(ageAdderIterator.next().value);
console.log('[current age]: ', jimmy.age);