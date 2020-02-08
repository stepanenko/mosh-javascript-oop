
function Circle1(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log('draw');
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.inConstructorFunc = function() {
      console.log('function from constructor');
    }
  }

  // prototype method
  draw() {
    console.log('draw');
  }

  // static method
  static parse(str) {
    let radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

let circle = new Circle(3);

console.log(Object.keys(circle));   // [ 'radius', 'instanceFunc' ]
circle.inConstructorFunc();   // function from constructor
Circle.prototype.draw();   // draw

let c = Circle.parse('{ "radius": 21 }');
console.log(c);   // Circle { radius: 21, inConstructorFunc: [Function] }
