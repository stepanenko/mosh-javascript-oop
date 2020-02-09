
// Private members using getter and setter

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('invalid radius');
    _radius.set(this, value);
  }
}

let c = new Circle(2);
c.radius = 5;
console.log(c.radius);   // 5

