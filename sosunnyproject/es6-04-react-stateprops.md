# React State vs. Props 개념정리

**At the end, prop and state are.. render()를 위한 input 데이터 들이다.**

Prop   | State
-------|---------|
can be created by Parent or component itself | created in the component (constructor method..), can get initial data from props
--- | keep track of info while rendering components
components should not change props | components itself can create, update, use state
setProps, replaceProps DEPRECATED | setState로 데이터 값 바꿀 수 있음
초기 입력/설정 값을 계속 유지 | 상태가 변화되는 데이터 값
A way of passing data from parent to child | Reserved only for interactivity -- data that changes over time
예) 사용자 이름, 아이디, 고정으로 렌더되는 텍스트들..| 예) 시간, 카운터, 와이파이 상태


#### Changing _props_ and _state_ 비교 차트

| | _props_ | _state_ | 
--- | --- | --- 
Can get initial value from parent Component? | Yes | Yes
Can be changed by parent Component? | Yes | No
Can set default values inside Component?* | Yes | Yes
Can change inside Component? | No | Yes
Can set initial value for child Components? | Yes | Yes
Can change in child Components? | Yes | No

\* Note that both _props_ and _state_ initial values received from parents override default values defined inside a Component.

> http://lucybain.com/blog/2016/react-state-vs-pros/

> https://github.com/uberVU/react-guide/blob/master/props-vs-state.md

----------------------------------------------------------------------------------------------------------------

# Async, Await

1. 이전의 asynchronous code 는 callback 이거나 promise 였다
2. Async/Await 는 promise를 기반으로 만들어졌다. 일반적인 callback 이나 노드 callback 에서는 사용할 수 없다. 
3. promise와 비슷하다 - non blocking
4. async/await 는 asynchronous 코드를 synchronous 처럼 보이게 하는 것이 장점이다.
5. promise에 비해서 nesting 이 없거나 줄어든다.

> https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9


## Promise vs. Async vs. Await

Promise | Async, Await|
--------|-------------|
.then | await 
.catch | try..catch
.. | <code> await Promise.all () </code> for multiple promises



Async | Await |
------|-------|
다음 명령이 시작될 때까지 기다린다. (sync를 맞추려면 기다려줘야 되니까). | Await가 붙은 명령이 끝날 때까지 그 다음 코드 블락은 실행되지 않고 기다린다.
Async 함수라고 써주지 않으면 그 함수 안에 있는 Await 가 동작을 안한다. | 항상 Async와 따라다녀야 한다. Async 없이 혼자 Await 효과를 낼 수 없다.
Async 함수는 항상 promise 를 리턴한다. | await가 붙은 promise/function이 처리완료되고 (성공/실패)결과를 뱉을 떄까지 코드 전체를 기다리게 한다.
...| promise 에러가 발생하면, <code>throw error</code> 를 쓴 효과처럼 exception을 리턴해준다.
...| promise가 잘 통과하면 결과값을 리턴한다.

---------------------------------------------------------------


### promise chaining ==> async/await code 변환 예시

```js
async function showAvatar() {

  // read our JSON
  let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
  let user = await response.json();
  // response = { name: "iliakan", "isAdmin": true }

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar on top of the webpage you're looking at right now
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  img.remove();
  return githubUser;
}

showAvatar();
```
> https://javascript.info/async-await


### 콘솔용 코드 예시
```js
// global variable
var d = { name: 'lee', hobby: 'tennis' }

// promise
const p = new Promise(
    function(resolve, reject) {
        if (d) {
            console.log(d); 
            resolve(d); }
       else { 
           var dataError = new Error('data not exist');
           reject(dataError);
       }
    })

// function that has promise inside
const getJSON = function () {
    p
    .then(function (fulfilled) {
		console.log("original data")
		console.log(d) 
		d = {name: 'park', hobby: 'movie'}
		return d
	})
    .catch(function (error) { 
		console.log(error.message); 
	});
}

// Request that would call getJSON and change the 'global var d'
// promise version
const promiseRequest = () =>
  getJSON()
    .then(d => {              // error message
      console.log(d)
      return "done"
    })
/**VM9080:3 Uncaught TypeError: Cannot read property 'then' of undefined
    at promiseRequest (<anonymous>:3:5)
    at <anonymous>:1:1
**/

// Request that would call getJSON and change the 'global var d'
// async await version
const asyncRequest = async() => {
	console.log(await getJSON())
    console.log(d)               //updated d is printed out
    return "done async request"
    
}

// execution code
console.log(d)  // lee, tennis
promiseRequest()   // Uncaught TypeError: Cannot read property 'then' of undefined ( referring to getJSON() )
console.log(d)  // park, movie  (althought error occurs, the d is updated after the promiseRequest() function)
d = {name: 'lee', hobby: 'tennis'}
console.log(d)  // lee, tennis
asyncRequest() 
console.log(d)  // park, movie

// reassign to old d
d = {name: 'lee', hobby: 'tennis'}
// Request that doesn't execute asynchronously
const Request = () => {
    getJSON()      // d is changed
    console.log(d)   // but this d still prints out previous JSON data. not updated one.
}
console.log(d) // this d is updated one.
```
### create-react-app 으로 만든 React 앱 코드 예시
```js 
componentDidMount(){
    this._getMovies();
}

_getMovies = async () => {
    //return value of _callApi is saved in const movies
    const movies = await this._callApi()

    //the code block below will happen only after await _callApi() is finished/finalized/completed
    this.setState({
    movies
    )}
}

_callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
    }
 ```
> https://academy.nomadcoders.co/courses/216871/lectures/3368685#/finished

# Proxy

## What Is It
### 1. proxy is the special objects
- why special?
    - you can customize some of operations
    - proxy is created with two parameters
### 2. Two parameters
- handler: trap (methods) 를 가지고 있는 placeholder object. 
    - trap: prop에 접근하도록 해주는 메소드. target과의 인터렉션/오퍼레이션에 intercept/관여한다. 
- target: proxy가 만들어내는 object 
    - 핸들러가 operation에 관여되지 않으면, 핸들러가 직접 타겟에다가 조치를 취한다. 핸들러의 fallback 행태처럼 보인다. 이 경우, proxy가 target을 둘러싸는 것처럼 보인다.

예시
1. proxy가 property 를 받으면 handler의 get이 처리해준다.
2. 'in' 오퍼레이터를 쓰면 handler의 has가 가동된다
3. handler가 prop을 set하지는 못한다. propKey는 만들어도, 그 Key안에 해당할 value까지 지정해주지 못한다. 그 value를 set하는 것은 target이 처리한다.
```js
const target = {};
const handler = {
    //intercepts: get properties
    get(target, propKey, receiver) {
        console.log(`GET ${propKey}`);
        return 123;
    },        
    //intercepts: check if prop exists
    has(target, propKey) {
        console.log(`HAS ${propKey}`);
        return true;
    }
};
const proxy = new Proxy(target, handler);
```

```bash
# get the prop called 'foo' -- handler intercepts
> proxy.foo
GET foo
123

# 'in' operator triggers has
> 'hello' in proxy
HAS hello
true

# handler cannot 'set' propKey value. proxy.bar is forwarded to target
# and target.bar is being 'set'
> proxy.bar = 'abc';
> target.bar
'abc'
```

### 3. prop 지정하는 꼴만 보면 python의 dictionary와 비슷한 느낌이다
- key를 생성하고, value를 지정한다
- { key: value, key1: value1, key2: value2 }
- 하지만 컨셉이 다른 듯..

### 4. target이 function 이면, 몇가지 traps(methods)가 더 사용가능하다
- apply: 함수 콜
    - proxy( ...)
    - proxy.call(...)
    - proxy.apply(...)
- construct: 생성자 콜
    - new proxy (...)
- 예시를 봐도 뭔소린지 모르겠다


### 5. ES6에서 proxy를 취소할 수 있다 = 꺼둘 수 있다. (revoke이라고 표현한다)
```js
const { proxy, revoke} = Proxy.revocable(target, handler);
```
```js
const target = {}; // Start with an empty object
const handler = {}; // Don’t intercept anything
const {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
console.log(proxy.foo); // 123

revoke();

console.log(proxy.foo); // TypeError: Revoked
```
- 즉, Proxy.revocable() 을 통해 revoke() 함수를 활성화시킨다.
- revoke()을 쓰면, proxy의 properties에 접근할 수 있는 다리를 끊는 셈이다.

> http://exploringjs.com/es6/ch_proxies.html#sec_proxies-explained
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
