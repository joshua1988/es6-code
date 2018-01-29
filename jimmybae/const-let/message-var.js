var messages = ['abcd', 'efgh', 'jklm'];

for (var i = 0; i < messages.length; i++) {
  setTimeout(function () {
    console.log(messages[i], i);
  }, i * 1500);
}