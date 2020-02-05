
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(2);

circle.location = 4;
let myPropName = 'coords';
circle[myPropName] = 12;
circle['new prop'] = 'well';

delete circle.location;

console.log(circle);   // Circle { radius: 2, draw: [Function], coords: 12, 'new prop': 'well' }
