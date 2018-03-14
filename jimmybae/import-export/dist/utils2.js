'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// utils2.js
var name = 'jimmy';

function sum(x, y) {
  return x + y;
}

var Circle = function Circle(radius) {
  _classCallCheck(this, Circle);

  this.radius = radius;
};

exports.name = name;
exports.sum = sum;
exports.Circle = Circle;