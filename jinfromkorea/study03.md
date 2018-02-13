# object literals

http://exploringjs.com/es6/index.html
object literal 로 검색하면 3개 나옴. 

* [4.12 From function expressions in object literals to method definitions](http://exploringjs.com/es6/ch_core-features.html#sec_from-func-expr-to-method-def)
syntax 가 좀 바뀐거고.

* [14.2 New features of object literals](http://exploringjs.com/es6/ch_oop-besides-classes.html#sec_new-features-obj-literals)
3가지 정도로 구분해서 보면 되고. 

* [14.9 FAQ: object literals](http://exploringjs.com/es6/ch_oop-besides-classes.html#sec_faq-obj-literals)
super 쓸수 있다니 무시하고. 

## function expression / method definition

In ES5 object literals, methods are created like other properties. The property values are provided via function expressions.

```js
var obj = {
    foo: function () {
        ···
    },
    bar: function () {
        this.foo();
    }, // trailing comma is legal in ES5
}
```

ES6 has method definitions, special syntax for creating methods:

```js
const obj = {
    foo() {
        ···
    },
    bar() {
        this.foo();
    },
}
```

## New features

[1] Method Definition

[1] Property value shorthands

[1] computed property keys

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
  // getter/setter
  get name(){
      return this.name;
  }
  set name(name){
      this.name = name;
  }
  // generator
  * myGrades(){
      yield 'B';
      yield 'A';
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

console.log(me, me.name);   // Student {name: "jinia", age: 21, major: "Computer Science"} jinia
me.name = 'jin';
console.log(me, me.name);  // Student {name: "jin", age: 21, major: "Computer Science"} jin
const iter = me.myGrades();
console.log(iter.next());   // {value:"B", done:false}
console.log(iter.next());   // {value:"A", done:false}
console.log(iter.next());   // {value:undefined, done:true}
```

```js
var name = 'jinia';
var age = 21;
var me = {
    name: 'jinia',
    age: 21
};
console.log(me); // {name: "jinia", age: 21}
var me2 = {
    name,
    age
};
console.log(me2); // {name: "jinia", age: 21}
```

```js
var key = 'major';
function getKey(){
    return 'hello';
}
var me = {
    name: 'jinia',
    [key]: 'Computer Science',
    ['age']: 21,
    [getKey()]: 'Hi'
}
console.log(me); // {name: "jinia", major: 'Computer Science', age: 21, hello: 'Hi'}
```

# Promise

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
![Image](https://cdn.rawgit.com/Vectaio/a76330b025baf9bcdf07cb46e5a9ef9e/raw/26c4213a93dee1c39611dcd0ec12625811b20a26/js-promise.svg)



```js
if( navigator.mediaDevices != undefined ) {
    navigator.mediaDevices.enumerateDevices().then( deviceInfos => { 
        deviceInfos.forEach( deviceInfo => { 
            if(deviceInfo.kind=='videoinput'){cameraCnt++}
            else if(deviceInfo.kind=='audioinput'){micCnt++} 
        } ); 
        console.log(deviceInfos);
    } ).catch( error => console.log(error) );
} else {
    console.log('지원하지 않는 기기 입니다.');
}
```

```js
if( navigator.mediaDevices != undefined ) {
    navigator.mediaDevices.getUserMedia({audio:true, video:true}) // MediaStream 객체를 return함. 
    .then( stream => {
        console.log(stream); // MediaStream
        document.getElementById('localVideo').srcObject = stream;
    }).catch( error => {
        console.log(error);
    });
}
```

```js
function button_onclick_signup(){
    email = document.getElementById('signup_email').value;
    password = document.getElementById('singup_password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then( () => {
        document.getElementById('signup_page').style.display = "none";
    }).catch(error => {
        console.log(error);alert(error.message)
    });
}
function button_onclick_signin(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch( error => {
        console.log(error);alert(error.message);
        if(error.code=='auth/user-not-found'){
            document.getElementById('signup_page').style.display = "block";
            document.getElementById('login_page').style.display = "none";
            document.getElementById('signup_email').value = document.getElementById('email').value;
        }
    });
}
function button_onclick_signout(){
    document.getElementById('room_page').style.display = "none";
    firebase.auth().signOut().then( () => console.log("sign out") ).catch( error=> console.log(error) );
}
```
