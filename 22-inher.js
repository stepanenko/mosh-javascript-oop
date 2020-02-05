
let person = { name: 'Mosh' };
let baseObject = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(baseObject, 'toString');
// console.log(descriptor);

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
});
delete person.name;   // wont work
person.name = 'Sergio';   // wont work
let descr = Object.getOwnPropertyDescriptor(person, 'name');

console.log(descr);
