
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    console.log('moving');
  }
}

// Prototype members:
Circle.prototype.draw = function() {
  console.log('draw');
}

const circle = new Circle(5);

console.log(Object.keys(circle));   // [ 'radius', 'move' ]
for (let key in circle) console.log(key);   // radius move draw

console.log(circle.hasOwnProperty('radius'));   // true
console.log(circle.hasOwnProperty('draw'));   // false
