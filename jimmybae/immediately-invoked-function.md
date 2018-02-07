## Immediately-invoked function expression (IIFE)
정의하고 바로 호출
```js
(function () {
  ......
})();
```

1. named
```js
(function square(x) {
  console.log(x * x);
})(5);
(function square(x) {
  console.log(x * x);
}(5));
```

2. anonymous
```js
(function (x) {
  console.log(x * x);
})(5);
(function (x) {
  console.log(x * x);
}(5));
```

### 사용
- 플러그인, 라이브러리를 만들때 초기화 코드 부분에서 전역변수로 선언하는 것을 피하기 위해 사용
- 라이브러리 전역변수 충돌 (jQuery, Prototype)
```js
(function ($) {

})(jQuery);
```

### Reference
[[자바스크립트] 함수(Function), 즉시실행함수(Immediately-invoked function expression) :: beomy](http://beomy.tistory.com/9?category=591557)  
[Javascript Function | PoiemaWeb](http://poiemaweb.com/js-function)