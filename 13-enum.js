
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(2);

circle.location = 4;
circle['new prop'] = 'well';

for (let key in circle) {
  if (typeof circle[key] !== 'function') {
    console.log(key, circle[key]);
  }
}

const keys = Object.keys(circle);
console.log(keys);   // [ 'radius', 'draw', 'location', 'new prop' ]

('radius' in circle) ? console.log(true) : console.log(false);   // true
