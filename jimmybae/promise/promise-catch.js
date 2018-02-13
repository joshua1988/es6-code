const p1 = new Promise((resolve, reject) => {
  throw 'Promise1';
});

p1.catch((e) => {
  console.log('[catch]', e);
});

// 비동기 콜백 내에 발생한 오류는 잡지 못함.(throw in setTimeout)
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw 'Promise2 setTimeout';
  }, 1000);
});

p2.catch((e) => {
  console.log('[catch]', e);
});