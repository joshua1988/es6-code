## Rest Syntax
- 갯수가 정확히 정해지지 않은 함수의 인자를 가르킴

```js
// 형식
function func(...args) {

}
```

## ES6에 새로 추가된 이유
- ES5에서는 `arguments` 말고는 함수의 인자를 접근할 수 있는 방법이 없었음
- `arguements`는 배열과 유사한 객체이지 배열이 아니라서 `map(), filter(), reduce()`와 같은 Array Helpers를 사용할 수 없었음.

#### ES5

```js
function sum() {
	var total = 0;

	if (arguments.length > 0) {
		for (var key of arguments) {
			total += key;
		}
	}

	return total;
}
sum(10, 20); // 30
```

#### ES6

```js
function sum(...args) {
	return args.reduce(function (prev, next) {
		return prev + next;
	});
}
sum(10, 20); // 30
```
