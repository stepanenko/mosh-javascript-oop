
function Circle() {
  this.draw = function() { console.log(this); }
}

let c = new Circle();
c.draw();   // Circle { draw: [Function] }

let b = c.draw;
b();  // Object [global] {...}
