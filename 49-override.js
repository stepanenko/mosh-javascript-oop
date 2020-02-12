
class Shape {
  move() {
    console.log('moving');
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log('move cirlce');
  }
}

let c = new Circle();
console.log(c.move());   // moving    move circle
