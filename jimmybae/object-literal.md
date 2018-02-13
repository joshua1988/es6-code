## Object Literal
### Literal
new를 사용하지 않고 객체를 만드는 것을 literal이라 한다.  
```js
var jimmy = new Object();
jimmy.firstName = 'Bae';
jimmy.age = 40;
console.log(1, jimmy); // 1 { firstName: 'Bae', age: 40 }

var jimmy = {
  firstName: 'Bae',
  age: 40
};
console.log(2, jimmy); // 2 { firstName: 'Bae', age: 40 }
```

### 단축 표기
- 객체 property 정의 (변수명으로 객체 생성, `단축 속성명`)
- 객체 method 정의 (`단축 메서드`)
```js
var firstName = 'Bae';
var age = 40;
var jimmy = {
  firstName: firstName,
  age: age,
  toString: function() {
    return this.firstName + ' : ' + this.age;
  }
};
console.log(jimmy); // { firstName: 'Bae', age: 40, toString: [Function: toString] }
console.log(jimmy.toString()); // Bae : 40
```
```js
const firstName = 'Bae';
const age = 40;
const jimmy = {
  firstName,
  age,
  toString() {
    return this.firstName + ' : ' + this.age;
  }
};
console.log(jimmy); // { firstName: 'Bae', age: 40, toString: [Function: toString] }
console.log(jimmy.toString()); // Bae : 40
```

### 속성명을 동적으로 사용(`속성 계산명`)
```js
const parent = ['Mother', 'Father'];
const jimmy = {
  firstName: 'Bae',
  age: 40,
  ['parent' + parent[0]]: 'Susan Park',
  ['parent' + parent[1]]: 'Peter Bae'
};
console.log(jimmy.parentMother); // Susan Park
console.log(jimmy.parentFather); // Peter Bae
```

### generator function
```js
var jimmy = {
  firstName: 'Bae',
  age: 40,
  ageAdder: function *() {
    while(true) {
      yield ++this.age;
    }
  }
};
// 실행되지 않고 iterator object가 리턴
var ageAdderIterator = jimmy.ageAdder();
// next호출 yield까지 실행
console.log(ageAdderIterator.next().value); // 41
console.log(ageAdderIterator.next().value); // 42
console.log(ageAdderIterator.next().value); // 43
console.log('[current age] : ', jimmy.age); // 43
```
```js
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
```
### Reference
[JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)
[ZeroCho Blog](https://www.zerocho.com/category/JavaScript/post/572c6f759a5f1c4db2481ee3)