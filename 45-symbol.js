
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {
    console.log('draw');
  }
}

let c = new Circle(1);
let key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);   // 1

