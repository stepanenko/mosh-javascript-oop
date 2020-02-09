
class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('moving');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
    }

  draw() {
    console.log('draw');
  }
}

let c = new Circle('red', 2);
console.log(c);   // Circle { color: 'red', radius: 2 }
