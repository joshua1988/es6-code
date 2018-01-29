var messages = ['abcd', 'efgh', 'jklm'];

/* 
 * for (let i)
 * 루프를 반복할 때마다 매번 x 변수를 새로 바인딩
 * 서로 다른 루프 변수를 참조
 */
for (let i = 0; i < messages.length; i++) {
  setTimeout(function () {
    console.log(messages[i], i);
  }, i * 1500);
}