'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = exports.name = 'jimmy';

function sum(x, y) {
  return x + y;
}

var Circle = exports.Circle = function Circle(radius) {
  _classCallCheck(this, Circle);

  this.radius = radius;
};