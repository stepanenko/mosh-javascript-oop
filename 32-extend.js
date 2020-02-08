
// Intermediate Function Inheritance:

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function() {
  console.log('duplicated');
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
  console.log('drawing');
}

function Square(size, color) {
  Shape.call(this, color)
  this.size = size;
}

extend(Square, Shape);

let c = new Circle(2, 'red');
let s = new Square(22, 'black');

console.log(s);   // Square { color: 'black', size: 22 }