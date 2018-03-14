## import, export
### module
* 애플리케에션을 구성하는 개별적 요소
* 캡슐화하고 필요한 API를 외부에 노출 (재사용 가능) `export`
* 다른 코드에서 로드하여 사용 `import`
* ***개발효율성, 유지보수성 향상***

### ES6 이전 client-side javascript
* script tag를 사용 외부 스크립트 파일을 로딩
* 파일마다 독립적인 scope를 갖지 않고 하나의 전역 객체에 바인딩
* 전역변수의 중복 등 문제가 발생

### export
* 모듈은 기본적으로 해당 모듈 내부에서만 참조 가능하기에 export를 이용 외부에서 사용
* var, let, const, function, class export가능
```js
// utils1.js
export const name = 'jimmy';

export function sum(x, y) {
  return x + y;
}

export class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
```
* 객체로 구성하여 export
```js
// utils2.js
const name = 'jimmy';

function sum(x, y) {
  return x + y;
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

export { name, sum, Circle };
```

### import
```js
// index1.js
import { name, sum, Circle } from './utils1';
// import * as utils1 from './utils1';

console.log(name); // jimmy
console.log(sum(1, 2)); // 3
console.log(new Circle(10)); // Circle { radius: 10 }
```
* 이름 변경
```js
// index2.js
import { name as NM, sum as SM, Circle as CI } from './utils2';

console.log(NM); // jimmy
console.log(SM(1, 2)); // 3
console.log(new CI(10)); // Circle { radius: 10 }
```

### export default
* 모듈에서 하나만 export하는 경우
* var, let, const 변수는 사용 X
```js
// utils3.js
export default function(x, y) {
  return x + y;
}
```
* 임의의 이름으로 import
```js
// index3.js
import isum from './utils3'

console.log(isum(1, 2)); // 3
```

### babel
* ES6 -> ES5 이하의 버전으로 트랜스파일링
1. package.json 생성
2. 로컬에 babel cli 설치
3. 로컬에 babel env preset 설치 (여러 플러그인이나 설정을 미리 설정)
```sh
$ npm init -y(-yes: 기본값)
$ npm i babel-cli --save-dev
$ npm i babel-preset-env --save-dev
```

4. .babelrc 생성
```json
{
  "presets": ["env"]
}
```
5. package.json scripts add
```json
{
  ......
  "scripts": {
    ......
    "build": "babel . --ignore ./node_modules -d ./dist"
  }
  ......
}
```

6. 실행
```sh
$ npm run build
```

### Reference
[ES6 In Depth: 모듈 ★ Mozilla 웹 기술 블로그](http://hacks.mozilla.or.kr/2016/05/es6-in-depth-modules/)
[ECMAScript6 - Module | PoiemaWeb](http://poiemaweb.com/es6-module)
[ECMAScript6 - Babel + Webpack | PoiemaWeb](http://poiemaweb.com/es6-babel)