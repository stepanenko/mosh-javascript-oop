
let myObj = {};
let notMyObj = {};
console.log(myObj === notMyObj);   // false
// myObj.__proto__ (parent of myObj)

console.log(myObj.constructor.prototype === myObj.__proto__);   // true
console.log(myObj.constructor);   // [Function: Object]  < let myObj = {} same as let myObj = new Object() >

function Circle(radius) {
  this.radius = radius;
}

let circle = new Circle(3);

console.log(circle.__proto__);   // Circle {}
console.log(Circle.prototype);   // Circle {}