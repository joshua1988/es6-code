var jimmy = {
  firstName: 'Bae',
  age: 40,
  ageAdder: function *() {
    while(true) {
      yield ++this.age;
    }
  }
};
var ageAdderIterator = jimmy.ageAdder();
console.log(ageAdderIterator.next().value); // 41
console.log(ageAdderIterator.next().value); // 42
console.log(ageAdderIterator.next().value); // 43
console.log('[current age] : ', jimmy.age); // 43