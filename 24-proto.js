
function Circle(radius) {
  this.radius = radius;

  this.color = function() {
    this.draw();
    console.log('colored');
  }

  this.takePen = function() {
    console.log('Pen was taken');
  }
}

Circle.prototype.draw = function() {
  this.takePen();
  console.log('draw');
}
Circle.prototype.toString = function() {
  return 'Circle radius is ' + this.radius;
}


const circle = new Circle(5);


circle.draw();   // Pen was taken    draw
console.log(circle.toString());   // Circle radius is 5
