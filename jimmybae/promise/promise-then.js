const p = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 10);
  console.log('[num]', num);
  if(num % 2 == 0) {
    resolve('even number');
  } else {
    reject('odd number');
  }
});

p.then(
  (value) => { console.log('[fulfilled]', value); },
  (reason) => { console.log('[rejected]', reason); }
);

p.catch((e) => { console.log('[catch]   ', e); });