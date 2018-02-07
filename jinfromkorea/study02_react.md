다음 위치의 소스를 base로 했음
* https://github.com/chentsulin/electron-react-boilerplate

firebase auth / mqtt client 가 추가됨
* https://github.com/poscoict-arvrmr/second

![Image](https://poscoict-arvrmr.github.io/docs/images/home_init.png)
![Image](https://poscoict-arvrmr.github.io/docs/images/home_ready.png)

# react
single page application을 위한 것임.
```html
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
```

* case 1 : 
```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

* case 2 : 
```js
const jsx = (
  <h1>Hello, world!</h1>
);
ReactDOM.render(
  jsx,
  document.getElementById('root')
);
```

* case 3 : 
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
ReactDOM.render(
  <Welcome name="jinia" />,
  document.getElementById('root')
);
```

# react lifecyle
* https://velopert.com/1130
* https://reactjs.org/docs/react-component.html#the-component-lifecycle
![Image](https://velopert.com/wp-content/uploads/2016/03/Screenshot-from-2016-12-10-00-21-26-1.png)

# redux
* https://velopert.com/1225 ( mvc 패턴과 flux 패턴 )
![Image](https://velopert.com/wp-content/uploads/2016/04/flux-simple-f8-diagram-with-client-action-1300w.png)
