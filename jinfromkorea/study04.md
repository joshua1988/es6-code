# async & await

https://medium.com/@nemo1275/await%EA%B0%80-%EB%AD%90%EC%A3%A0-1332622df251  
https://developers.google.com/web/fundamentals/primers/async-functions?hl=ko  

promies와 밀접한 관련이 있는듯. 
async 키워드와 함께 function을 정의하고. 
await 키워드와 함께 Promise를 사용하면 됨. 

```js
const myPromise = new Promies((resolve, reject) => {
    resolve('jin');
});

async function main(){
    const name = await myPromise;
    console.log(name); // jin
}

main();
```


```js
function getName(){
    Promise.resolve('jin');
}
function getAge(){
    Promise.resolve(21);
}
async function main(){
    const name = await getName();
    const age = await getAge();
    console.log(name); // jin
    console.log(age);  // 21
}
main();
```

```js
function getName(){
    Promise.resolve('jin');
}
function getAge(){
    Promise.reject("an error has occured");
}
async function main(){
    try{
        const name = await getName();
        const age = await getAge();
        console.log(name); 
        console.log(age);  
    }catch(err){
        console.log(err); // an error has occured
    }
}
main();
```

```js
function getName(){
    Promise.resolve('jin');
}
function getAge(){
    Promise.resolve(21);
}
async function main(){
    try{
        const [name, age] = await Promise.all([getName(), getAge()];
        console.log(name);  // jin
        console.log(age);   // 21
    }catch(err){
        console.log(err);
    }
}
main();
```


# proxy

http://hacks.mozilla.or.kr/2016/03/es6-in-depth-proxies-and-reflect/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

proxy는 standard built-in object 중 하나 인듯.

handler, traps, target 이라는 용어가 있음. 

traps 는 property에 접근하는 method들로.. get(), set(), construct() 등 13개정도 있는듯함. 

```js
var p = new Proxy(target, handler);
```

target과 handler는 object 이고.. 

```js
var target = {};
var handler = {};
var p = new Proxy(target, handler);

p.a = 37; // set 

console.log(target.a); 
```

handler에 traps 들을 선택적으로 재정의 하는것으로 보임. 

```js
const target = {
  secret: 'easily scared',
  eyeCount: 4
};

const handler = {
  get: function(target, prop, receiver) {
    if (prop === 'secret') {
      return `${target.secret.substr(0, 4)} ... shhhh!`;
    } else {
      return Reflect.get(...arguments);
    }
  }
};

const p = new Proxy(target, handler);

console.log(p.eyeCount);
console.log(p.secret);
```

