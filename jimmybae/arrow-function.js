const user = {
  name: 'Jimmy',
  hello() {
    console.log(`Hello ${this.name}`);
  }
};
user.hello(); // Hello Jimmy