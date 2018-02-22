## Proxy
### Proxy design pattern
하나의 객체가 대체(proxy) 역활을 수행하여 상황에 따라 다른 객체에 접근하게 해주거나 다른 함수를 호출
```js
var logger = (function() {
  var log = '';
  return {
    add: function(msg) {
      log += '[logger] ' + msg + '\n';
    },
    show: function() {
      console.log(log); log = '';
    }
  }
})();

function Level() {
  this.getLevel = function(name) {
    if(name === 'jimmy') {
      return 'Deputy Manager';
    } else if(name === 'jifromkorea') {
      return 'P4';
    } else if(name === 'joshua') {
      return 'P2';
    } else if(name === 'sosunny') {
      return 'P1';
    } else {
      return '';
    }
  }
}

function LevelProxy() {
  var level = new Level();
  var levelCache = {};

  return {
    getLevel: function(name) {
      if(!levelCache[name]) {
        levelCache[name] = level.getLevel(name);
      }
      logger.add(name + ': ' + levelCache[name]);
      return levelCache[name];
    },
    getCount: function() {
      return Object.keys(levelCache).length;
    }
  }
}

var level = new LevelProxy();

level.getLevel('jimmy');
level.getLevel('jifromkorea');

logger.add('------------------------------');
logger.add('Cache size: ' + level.getCount());
logger.add('\n');

level.getLevel('joshua');
level.getLevel('sosunny');

logger.add('------------------------------');
logger.add('Cache size: ' + level.getCount());

logger.show();
/*
[logger] jimmy: Deputy Manager
[logger] jifromkorea: P4
[logger] ------------------------------
[logger] Cache size: 2
[logger]

[logger] joshua: P2
[logger] sosunny: P1
[logger] ------------------------------
[logger] Cache size: 4
*/
```
### ES6 Proxy
속성 조회, 할당, 열거, 함수호출 등에 대한 행위에 사용자의 동작을 재정의 할때 사용

#### Usage
- `target` Proxy로 랩핑할 대상 객체
- `handler` 작업이 수행 될때 Proxy의 동작을 정의하는 함수 객체 
```js
var p = new Proxy(target, handler);
```

#### Example
- `객체 로깅`
```js
const logger = (() => {
  let log = '';
  return {
    add(msg) {
      log += '[logger] ' + msg + '\n';
    },
    show() {
      console.log(log);
      log = '';
    }
  }
})();

const dummy = {};
const handler = {
  get(target, key, receiver) {
    logger.add('get called: ' + key);
    return Reflect.get(target, key); // target 객체로 method 호출을 전달
  },
  set(target, key, value, receiver) {
    logger.add('set called: ' + key + ' = ' + value);
    return Reflect.set(target, key, value);
  }
};
const p = new Proxy(dummy, handler);

p.prop1 = 10;
console.log(p.prop1);     // 10
p.prop2 = 20;
console.log(p.prop2);     // 20
console.log('---------------------------------');
console.log(dummy.prop1); // 10
console.log(dummy.prop2); // 20
console.log('---------------------------------');
logger.show();
/*
[logger] set called: prop1 = 10
[logger] get called: prop1
[logger] set called: prop2 = 20
[logger] get called: prop2
*/
```

- `읽기 전용 객체` 값을 변결할 수 있는 handler method를 모두 오버라이딩 한다.
```js
const dummy = {};
const handler = {
  set(target, key, value, receiver) {
    throw new Error('This object read only.');
  }
};
const p = new Proxy(dummy, handler);
p.prop = 'test'; // Error: This object read only.
```
### Reference
- [Proxy - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#Methods_of_the_handler_object)
- [Reflect - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [Proxy JavaScript Design Pattern with examples- dofactory.com](http://www.dofactory.com/javascript/proxy-design-pattern)
- [Javascript ES6 Proxy](http://dev-momo.tistory.com/entry/javascript-ES6-Proxy)
- [ES6 In Depth: 프락시 (Proxy) ★ Mozilla 웹 기술 블로그](http://hacks.mozilla.or.kr/2016/03/es6-in-depth-proxies-and-reflect/)