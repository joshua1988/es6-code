
이전에는 
```
name = 'jinia'; //var 라는 keyword 없어도 됨
var age = 21;
```

es6 에서는
```
const name = 'jinia'; // 상수 성격의 값은 const 를
let age = 21;         // 변수 성격의 값은 let 을 사용할 수 있게
```

수정변경 관점에서 object 예시라면

```
var user = {
  name:'jinia',
  age:21,
  hobby:['game','movie'],
  print:function(){
    console.log(name,age);
  }
}
user.log = function(){   // var는 수정가능하므로 log() 함수 추가가능 ( propery 값 추가가능 )
  user.print();          // user가 let 이었다면 가능할테고, const였다면 안되겠지
}
user.print = function(){   // var는 수정가능하므로 print() 함수 로직 변경가능 ( property 값 변경가능 )
  console.log(age,name);   // user가 let 이었다면 가능할테고, const였다면 안되겠지
}
```

scope 관점에서
```
var name = 'jinia';  // function 밖에서 선언되었으므로, 1,2 번 부분에서 사용가능
function one(){
  name = 'jin'; // 1
  var Nm = 'jin';    // function 안에서 선언되었으므로, 3번 부분에서만 사용가능
  age = 30;          // var 가 없는 변수는, 4번 부분처럼 사용가능
  ... 중략 ...
  Nm = 'jinia'; // 3
}
name = 'jinia'; // 2
age = 21;       // 4
```


---


es5 에서의 function
```
const add = function(a, b){
  return a+b;
}
```

es6 에서의 arrow function
```
const add = (a, b) => {
  return a+b;
}
```

es6 에서 code line 줄이기
```
const add = (a, b) => a+b;
```



es5 에서는 arguments 사용가능
```
const add = function(a, b){
  console.log(arguments); // 
  return a+b;
}
```
es6 에서는 arguments 사용못함.
```
const add = (a, b) => {
  console.log(arguments); // Uncaught ReferenceError : arguments is not define
  return a+b;
}
```


es5 에서는 this keyword 사용가능
```
const user = {
  name : 'jinia',
  cities : ['seoul','jeju'],
  print : function(){
    console.log(this.name); // this 가능
    this.cities.forEach( function(city){
      // console.log(this.name); // Uncaught TypeError : Cannot read property 'name' of undefined
      const that = this;    // this 를 that 으로
      console.log(that.name); // this 불가, that 선언 후 사용
      console.log(city);
    }
  }
}
user.print();
```

es6 에서는 
```
const user = {
  name : 'jinia',
  cities : ['seoul','jeju'],
  print(){                            // function keyword 제거
    console.log(this.name); 
    this.cities.forEach( (city) => {  // function keyword 제거
      console.log(this.name);  // this keyword 사용가능
      console.log(city);
    }
  }
}
user.print();
```

