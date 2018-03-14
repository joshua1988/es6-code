> ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect 
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming

# Reflect

## Brief
- Reflect는 생성자가 아니다 (proxy는 글로벌 생성자임)
    - new 오퍼레이터를 쓰거나
    - Reflect 객체를 함수처럼 쓰지 말아라
- Reflect의 프로퍼티와 메소드는 모두 static 이다

**(mdn :: meta programming 링크)**
_뭔말인지는 모르겠으나 일단 써봄_
- 빌트인 객체로써 (intercept 가능한 JS 오퍼레이션을 위한) 메소드를 제공한다.
- handler에서 target으로 디폴트 오퍼레이션이 전달되는 것을 도와준다
- ES6에서의 발전: Proxy와 Reflect 객체를 사용할 때, 유저가 기본적인 language operations (ex, property lookup, assignment, enumeration, function invocation) 들을 커스터마이즈하고 intercept할 수 있다. 
- 이를 통해 meta level의 자바스크립트 프로그래밍이 가능하다.

## Methods
- Proxy handler methods와 동일하다
- 몇 개는 Object의 메소드와 같기도 하다


### 1. Reflect.apply() 
- Reflect.apply(target, thisArgument, argumentsList)
    - target = 적용할 함수
    - thisArgument = 적용처
    - argumentsList = 함수를 쓸 때 필요한 인자 값(들)
- 일반적으로 target 메소드를 쓸 때의 표현: thisArgument.target(argumentsList)
- es5 에 비해 less verbose -- 주저리가 덜하다.

**es5**
```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

**es6**
```js
Reflect.apply(Math.floor, undefined, [1.75]);  // 1;
//the result is as same as
Math.floor(1.75) // 1

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]); // "hello"
//as same as
String.fromCharCode(104, 101, 108, 108, 111) // "hello"

Reflect.apply(''.charAt, 'ponies', [3]); // "i"
//as same as
'ponies'.charAt(3) // "i"
```

### 2. Reflect.construct()
- new 오퍼레이터 역할 해주는 메소드\
- SYNTAX: Reflect.construct(target, argumentsList[, newTarget])

```js
function func1(a,b,c) {
    this.sum = a + b + c;
}

const args = [1, 2, 3];

const object1 = new func1(...args);  //using spread operator
//equivalent to 
const object2 = Reflect.construct(func1, args);

console.log(object2.sum);
// expected output: 6
console.log(object1.sum);
// expected output: 6

//more examples
var date = Reflect.construct(Date, [1776, 6, 4]);
date instanceof Date;
date.getFullYear();

//subclass, new.target operator
function someConstructor() {}
var result = Reflect.construct(Array, [], someConstructor);

Reflect.getPrototypeOf(result); // someConstructor.prototype
Array.isArray(result); // true
```


### 3. Reflect.defineProperty()
- Object.defineProperty 에서는 
    - property define 작업이 성공하면: object / 실패하면: TypeError 리턴 
    - try..catch 블록으로 에러를 잡았어야 했다.
- Reflect.defineProperty 는 
    - Boolean 타입으로 success status 를 리턴하기 때문에,
    - if..else 블록을 쓰면 된다.
```js
const object1 = {};

if (Reflect.defineProperty(object1, 'property1', {value: 42})) {
  console.log('property1 created!');
  // expected output: "property1 created!"
} else {
  console.log('problem creating property1');
}

console.log(object1.property1);
// expected output: 42
object1; 
//propety1: 42
```

