
// Abstraction example:

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  let computeLocation = function(factor) {
    // ...
  }

  this.draw = function() {
    computeLocation(0.1);
    // defaultLocation;
    // this.radius;

    console.log('draw');
  }
}

const circle = new Circle(2);

// defaultLocation and computeLocation() are hidden from user
