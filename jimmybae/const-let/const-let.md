## let & const
### let
- let이 새로운 var이다.
- block-scoped [block](./block.js)
- `for (let i)` 루프를 반복할 때마다 매번 i변수를 새로 바인딩 [var](./message-var.js), [let](./message-let.js)
- global let variable은 global object의 속성이 아니다.
  > window.variableName으로 접근할 수 없음.
- let변수를 선언 전에 참조하면 에러다.
  > variable은 uninitialized

### const
- 모든 특성이 let와 같다.
- 단......
- 변수를 선언하는 시점에만 값을 할당할 수 있음
- 값을 할당하지 않아도 에러