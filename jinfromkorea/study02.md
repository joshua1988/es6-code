# 실행컨텍스트
http://poiemaweb.com/js-execution-context  
실행 가능한 코드를 형상화하고 구분하는 추상적인 개념  
실행 가능한 코드 : 전역코드 & 함수내코드 & Eval코드

# 스코프  
http://poiemaweb.com/js-scope  
전역 scope, 지역 scope 두종류로 구분됨.

# 즉시실행함수
IIFE (Immediately Invoked Function Expression)  
https://developer.mozilla.org/en-US/docs/Glossary/IIFE
```
(function () { 
  console.log('test');
})();
```

# class
class 는 keyword 이고.. {} 안에 클래스를 정의하면 됨.   
const 변수로 생성하고. new keyword를 사용함.

```js
class Person {
  constructor(){
    console.log('test');        // test
  }
}
const me = new Person('jinia');
console.log(me);                // Person {}
```

생성자에 값을 인자를 넘겨보면 다음과 같음.

```js
class Person {
  constructor(name){
    this.name = name;
  }
}
const me = new Person('jinia');
console.log(me);                // Person {name: "jinia"}
const other = new Person();
console.log(other);             // Persion {name: undefined}
```

생성자의 초기값을 설정할 수 있음. 

```js
class Person {
  constructor(name = 'Anonymouse'){
    this.name = name;
  }
}
const me = new Person('jinia');
console.log(me);                // Person {name: "jinia"}
const other = new Person();
console.log(other);             // Persion {name: "Anonymouse"}
```

함수를 추가해봄. 따옴표 대신에 (`) 사용해서 문자열을 만들수도 있음.

```js
class Person {
  constructor(name = 'Anonymouse', age = 0){
    this.name = name;
    this.age = age;
  }
  getGretting(){
    // return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`;
  }
}
const me = new Person('jinia', 21);
console.log(me.getGretting());                // Hi. I am jinia!
const other = new Person();
console.log(other.getGretting());             // Hi. I am Anonymouse!
console.log(me.getDescription());             // jinia is 21 year(s) old.
console.log(other.getDescription());          // Anonymouse is 0 year(s) old.
```

extends 를 사용하는 예시. override 예시.

```js
class Person {
  constructor(name = 'Anonymouse', age = 0){
    this.name = name;
    this.age = age;
  }
  getGretting(){
    return `Hi. I am ${this.name}`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`;
  }
}
class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if (this.hasMajor()){
      description += ` Their major is ${this.major}.`;
    }
    return description
  }
}
const me = new Student('jinia', 21, 'Computer Science');
console.log(me);                     // Student {name: "jinia", age: 21, major: "Computer Science"}
const other = new Student();
console.log(other);                  // Student {name: "Anonymouse", age: 0, major: undefined }
console.log(me.hasMajor());          // true
console.log(other.hasMajor());       // false
console.log(me.getDescription());    // jinia is 21 year(s) old. Their major is Computer Science.
console.log(other.getDescription()); // Anonymouse is 0 year(s) old.
```

## Tip

```
!''            true
!!''           false
!!'jinia'      true
!!undefined    false
```
