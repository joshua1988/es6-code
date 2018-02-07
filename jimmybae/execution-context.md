## 실행 컨텍스트
### 개념
- 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념
- 실행가능(전역, 함수 내 코드)한 코드가 실행되는 환경
- javascript 엔진이 실행 컨텍스트(실행에 필요한 여러 정보)를 객체 형대로 관리
  1. 변수: 전역, 지역, 매개, 객체프로퍼티
  2. 함수 선언
  3. scope
  4. this

### 실행 컨텍스트 스택
|>|>|>|>|>|
|:-:|:-:|:-:|:-:|:-:|
| | | inner() EC | | |
| | outer() EC | outer() EC | outer() EC | |
| global EC | global EC | global EC | global EC | global EC |

```js
var x = 'xxx';

function outer() {
  var y = 'yyy';
 
  function inner() {
    var z = 'zzz';
    
    console.log(x + y + z);
  }
  inner();
}
outer();
```

### 실행 컨텍스트 객체

| Execution context |||
|-|-|-|
| Variable object | var, function | GO, AO 객체 reference |
| Scope chain | Variable object, parent scope | 상위 AO, GO를 가르킨다 |
| this value | Context object | 함수 호출 패턴에 의해 결정 |

[Execution context 생성과정](https://cdn.rawgit.com/jimmybae/es6-code/master/jimmybae/execution-context/index.html)

### 생성과정
1. Global Object 생성
> 컨트롤이 실행 컨텍스트에 진입 전 Global Object가 생성
2. global EC 생성, 스택에 추가
> 코드로 컨트롤이 진입하면 global EC가 생성, 실행 컨텍스트 스택에 쌓인다.
3. scope chain 생성, 초기화
> GO reference 포함하는 list
4. VO -> GO
5. outer 함수 선언처리
> 함수명=GO property, 함수객체=GO value
6. x 변수 선언처리
> 변수명=property, undefined=value  
var 선언변수 선언단계, 초기화단계 한번에 이후어 지고 할당문에 도달하면 xxx값 할당  
변수 호이스팅
7. this value 연결
> 결정되기 이전 this는 전역 객체를 가리키고 있다가 함수 호출 패턴에 의해 this 값을 결정, 전역 컨텍스트는 언제나 전역 객체를 가르킨다.
8. x 변수 값할당
> 지금까지는 코드 실행 환경을 갖추기 위한 사전준비  
scope chain 목록을 0부터 검색하여 변수명을 찾아 xxx를 할당
9. outer 함수 실행
> 새로운 함수 실행 컨텍스트 생성
10. AO, scope chain 생성, 초기화
> AO생성, AO에 대한 reference를 scope chain의 선두에 설정
11. scope chain(1) -> GO
12. inner 함수 선언처리
13. y 변수 선언처리
14. this value 연결
15. y 변수 값할당
16. inner 함수 실행
17. AO, scope chain 생성, 초기화
18. scope chain(1, 2) -> AO1, GO
19. y 변수 선언처리
20. y 변수 값할당
21. this value 연결

### Reference
[Javascript Execution Context | PoiemaWeb](http://poiemaweb.com/js-execution-context)