
// Private members using WeakMaps

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log('moving');
    });
  }

  draw() {
    console.log(_radius.get(this));
    _move.get(this)();
  }
}

let c = new Circle(2);
console.log(c.draw());   // 2  moving

