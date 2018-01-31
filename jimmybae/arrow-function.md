## arrow function
1. Declaration
```js
() => { return true } // 매개변수 X
x => { return true } // 매개변수 1
(x, y) => { return true } // 매개변수 N

x => { return x * 2 }
x => x * 2 // 중괄호, return 생략
```
2. callback function
```js
var arr = [1, 2, 3];
var double = arr.map(function (x) {
  return x * 2;
});
console.log(double); // [1, 4, 6]
```

```js
const arr = [1, 2, 3];
const double = arr.map(x => x * 2);
console.log(double); // [1, 2, 4]
```

3. this
```js
function Greeter(greet) {
  this.greet = greet;
}

Greeter.prototype.nameArr = function (arr) {
  console.log(this.greet); // 생성자 함수 Greeter가 생성한 객체, 생성자 함수의 인스턴스(greeter)
  return arr.map(function (name) {
    // 생성자 함수와 객체의 메소드를 제외한 모든 함수(내부함수, 콜백함수 등...)의 내부 this는 전역객체를 가르킨다.
    return this.greet + ' ' + name;
  });
};

var greeter = new Greeter('Hello');
console.log(greeter.nameArr(['Jimmy', 'Joshua'])); // [ 'undefined Jimmy', 'undefined Joshua' ]
```
```js
// solution 1 : var self = this;
function Greeter(greet) {
  this.greet = greet;
}
Greeter.prototype.nameArr = function (arr) {
  var self = this;
  return arr.map(function (name) {
    return self.greet + ' ' + name;
  });
};

var greeter = new Greeter('Hello');
console.log(greeter.nameArr(['Jimmy', 'Joshua']));
```
```js
// solution 2 : map(function, this)
function Greeter(greet) {
  this.greet = greet;
}
Greeter.prototype.nameArr = function (arr) {
  return arr.map(function (name) {
    return self.greet + ' ' + name;
  }, this);
};

var greeter = new Greeter('Hello');
console.log(greeter.nameArr(['Jimmy', 'Joshua']));
```
```js
// solution 3 : .bind(this)
function Greeter(greet) {
  this.greet = greet;
}
Greeter.prototype.nameArr = function (arr) {
  return arr.map(function (name) {
    return this.greet + ' ' + name;
  }.bind(this));
};

var greeter = new Greeter('Hello');
console.log(greeter.nameArr(['Jimmy', 'Joshua']));
```
```js
function Greeter(greet) {
  this.greet = greet;
}
Greeter.prototype.nameArr = function (arr) {
  // Lexical this : 자신만의 this를 생성하지 않고 자신을 포함하는 외부 scope에서 this를 계승
  return arr.map(name => `${this.greet} ${name}`);
};

var greeter = new Greeter('Hello');
console.log(greeter.nameArr(['Jimmy', 'Joshua']));
```
4. arrow function X
- constructor function
```js
// constructor function은 prototype property를 가진다.
// prototype property가 가르키는 프로토타입 객체의 constructor를 사용
const Greeter = () => {}; // arrow function은 prototype property X
const greeter = new Greeter(); // TypeError: Greeter is not a constructor
```

- prototype method
```js
const user = {
  name: 'Jimmy'
};
Object.prototype.hello = () => console.log(`Hello ${this.name}`);
user.hello(); // Hello undefined
```
```js
const user = {
  name: 'Jimmy'
};
Object.prototype.hello = function() {
  console.log(`Hello ${this.name}`);
};
user.hello();
```

- method
```js
const user = {
  name: 'Jimmy',
  hello: () => console.log(`Hello ${this.name}`); // 전역 객체에 바인딩
};
user.hello(); // Hello undefined
```
```js
const user = {
  name: 'Jimmy',
  hello() {
    console.log(`Hello ${this.name}`);
  }
};
user.hello(); // Hello Jimmy
```

- addEventListener function