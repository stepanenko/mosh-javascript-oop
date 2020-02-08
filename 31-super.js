
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

// new Circle.prototype.constructor() = new Circle();
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('drawing');
}


let c = new Circle(2, 'red');
c.side = 5;
let s = new Shape();

console.log(c);   // Circle { color: 'red', radius: 2, side: 5 }