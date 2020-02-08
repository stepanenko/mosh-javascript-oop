
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  hunger: function() {
    this.hunger--
  },
  eat: function() {
    console.log('eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('swimming');
  }
};

function Person() {}
mixin(Person.prototype, canEat, canWalk);

function Goldfish() {}
mixin(Goldfish.prototype, canEat, canSwim);

let person = new Person();
let fish = new Goldfish();

console.log(person.walk());
console.log(fish.swim());