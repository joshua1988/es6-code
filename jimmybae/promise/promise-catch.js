var p1 = new Promise((resolve, reject) => {
  throw 'Promise1';
});

p1.catch((e) => {
  console.log('[catch]', e);
});

var p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw 'Promise2 setTimeout';
  }, 1000);
});

p2.catch((e) => {
  console.log('[catch]', e);
});