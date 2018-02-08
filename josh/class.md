## ES6 class
- Syntactic Sugar for prototype-based inheritance

```js
// ES5
function Product(name, price) {
	this.name = name;
	this.price = price;
	this.sell = function () {
		console.log('Not on sale');
	};
}
Product.prototype.purchase = function () {
	console.log('Purchased');
};
var p = new Product('coke', 1000);
p.sell();

// ES6
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	sell() {
		console.log('Not on sale');
	}
	purchase() {
		console.log('Purchased');
	}
}
const p = new Product('coke', 1000);
p.sell();
```

- can't create an instance without `new` keyword

```js
// ES5
function Product() {}
var p = Product();

// ES6
class Product {}
const p = Product(); // TypeError: Class constructor Product cannot be invoked without 'new'
```

```js
// ES5 - common mistake without new keyword
function Product() {
	return this;
}
var p1 = new Product();
var p2 = Product();
```

- 2 different types : class declarations and class expressions

```js
// class declarations
class Product {
	constructor(name, price) {
    // ...
	}
}

// class expressions (anonymous)
const Product = class {
	constructor(name, price) {
    // ...
	}
}

// class expressions
const Product = class Product {
	constructor(name, price) {
    // ...
	}
}
```

- class declaration is not hoisted

```js
const p = new Product(); // ReferenceError

class Product() {}
```

- class body is executed in strict mode
	- i.e) constructor, static, prototype methods, getter & setter

- `constructor()` can only be included in a class one time

```js
class Product {
	constructor() {

	}

	constructor() {

	}
}
const p = new Product(); // Uncaught SyntaxError: A class may only have one constructor
```

- `static` keyword can define a methods to utilize for applications utility

```js
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	static purchase(name, price, amount) {
		return 'you bought ' + amount + ' ' + name + 's which cost ' + price;
	}
}
console.log(Product.purchase('iphone', '$1,000', 3)); // you bought 3 iphones which cost $1,000
```

- `extends` is used to create a child class of another class

```js
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	purchase(name, price, amount) {
		return 'you bought ' + amount + ' ' + name + 's which cost ' + price;
	}
}

class iPhone extends Product {
	purchase() {
		return 'I got the iphone';
	}
}

const i = new iPhone();
i.purchase(); // "I got the iphone"
```

- super() can be used to access to the methods of super class

```js
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	purchase(name, price, amount) {
		return 'you bought ' + amount + ' ' + name + 's which cost ' + price;
	}
}

class iPhone extends Product {
	purchase() {
		return super.purchase();
	}
}

const i = new iPhone();
i.purchase(); // "you bought undefined undefineds which cost undefined"
```
