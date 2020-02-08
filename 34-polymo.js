
// Polymorphism:

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {
}
Shape.prototype.duplicate = function() {
  console.log('duplicated');
}

function Circle(radius) {
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  console.log('circle duplicated');
}

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log('square duplicated');
}

let c = new Circle(2);

const shapes = [
  new Circle(1),
  new Square(3)
];

for (let shape of shapes)
  shape.duplicate();
