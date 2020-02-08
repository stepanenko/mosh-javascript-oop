
// Method Overriding:

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
  Shape.prototype.duplicate.call(this);

  console.log('circle duplicated');
}

let c = new Circle(2);

console.log(c.duplicate());   // duplicated    circle duplicated