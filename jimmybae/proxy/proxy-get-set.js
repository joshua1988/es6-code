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
// [logger] set called: prop1 = 10
// [logger] get called: prop1
// [logger] set called: prop2 = 20
// [logger] get called: prop2