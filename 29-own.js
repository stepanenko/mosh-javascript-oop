
function Shape() {}

Shape.prototype.duplicate = function() {
  console.log('duplicated');
}

function Circle(radius) {
  this.radius = radius;
}

// new Circle.prototype.constructor() = new Circle();
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('drawing');
}


let c = new Circle(2);
c.side = 5;
let s = new Shape();
