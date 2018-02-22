const dummy = {};
const handler = {
  set(target, key, value, receiver) {
    throw new Error('This object read only.');
  },
  // ......
  // ......
  // ......
};
const p = new Proxy(dummy, handler);
p.prop = 'test'; // Error: This object read only.