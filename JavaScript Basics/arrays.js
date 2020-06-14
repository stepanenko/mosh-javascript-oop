
// === ADDING TO ARRAY ====
const numbers = [3, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');  // [ 1, 2, 'a', 'b', 3, 4, 5, 6 ]


// === FINDING ELEMENTS ===
const numbers2 = [1, 4, 2, 3, 'de', 1, 4];

numbers2.indexOf(7); // -1
numbers2.lastIndexOf('de');  // 4
numbers2.indexOf('de') !== -1;  // true

// New better way:
numbers2.includes('de');  // true
numbers2.indexOf(1, 2);  // 5


// === FINDING REFERENCE TYPES ===
// .includes doesnt work on reference TYPES
// instead we use .find
const courses = [
  { id: 0, name: "Java" },
  { id: 1, name: 'PHP' }
];

const found = courses.find(element => element.name == "Java");  // { id: 0, name: 'Java' }
const index = courses.findIndex(course => course.name === 'Jav')  // -1


// === REMOVING ELEMENTS ===
const numbers3 = [1, 2, 3, 4, 5];
// End
const last = numbers3.pop();  // last === 5;  [1, 2, 3, 4]

// First
const first = numbers3.shift();  // first === 1;  [ 2, 3, 4 ]

// Middle
const mid = numbers3.splice(2, 2);  // mid === [ 4 ];  [ 2, 3 ]


// ==== EMPTYING AN ARRAY ===
// Solution 1:
let numb = [1, 2, 3, 4, 5]; // will be removed by garbage collection
numb = [];
// console.log(numb);

//solution 2:

let another = [1, 2, 3, 4, 5];
another.length = 0;
// console.log(another);

// solution 3:

let third = [1, 2, 3, 4, 5, 6, 7];
third.splice(0, third.length);
// console.log(third);

// Solution 4:

let four = [1, 2, 3, 4, 5, 6];
while (four.length > 0)
  four.pop();
// console.log(four);


// === COMBINING ARRAYS ===
const one = [1, 2, 3];
const two = [4, 5, 6];

const comb = one.concat(two);

const slice = comb.slice(2, 4);
// console.log(slice);

const spread = ['er', ...comb, 'der', ...slice];
// console.log(spread);

const copy = spread.slice();
// console.log(copy);

// TO COPY ALSO USE '...' - spread operator
const copy2 = [...one];
// console.log(copy2);


// === ITERATING AN ARRAY ===

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let index in numbers)
  console.log(`Index ${index}: ${numbers[index]}`);

for (let elem of numbers)
  console.log(`Index ${numbers.indexOf(elem)}:`, elem);

numbers.forEach(element => {
  if (element % 2 === 0)
    console.log(element);
});

numbers.forEach((number, i) => console.log(i, number));


// === JOINING ARRAYS ===
const numbers = [1, 2, 3, 4, 5];

const join = numbers.join(', ');
console.log(join);


// SPLIT method:
const message = "This is my message";
const words = message.split(' ');
console.log(words);
const letters = message.split('');
console.log(letters);


// REVERSE A number
const number = 451;
const string = number + '';
const split = string.split('');
const reverse = split.reverse();
const joined = reverse.join('');
console.log(joined);


// === SORTING ARRAYS ===

const numb = [1, 4, 2, 5, 3];
numb.sort();
console.log(numb);

numb.reverse();
console.log(numb);

const array = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" }
];

array.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA > nameB) return 1;
  if (nameA < nameB) return -1;
  return 0;
});
console.log(array);


// === TEST, FILTER and MAP ELEMENTS ===

const numbers = [1, 2, 0, 3, 'good', 4, 5, -1];
const more = numbers.every(val => val >= 0);
console.log(more);

const oneNeg = numbers.some(value => {
  if (value === 'good') console.log("There is Good");
});

const list = numbers.map(n => '<li>' + n + '<li>');
const join = '<ul>' + list.join('') + '<ul>';
console.log(join);

const listObj = numbers
  .filter(n => n > 0)
  .map(n => ({ val: n }))
  .filter(obj => obj.val > 3)
  .map(ob => ob.val);
console.log(listObj);


// === REDUCE method ===

const array = [1, 2, 3, 4, 5, 6];
const sum = array.reduce(
  (accum, elem) => accum + elem
);
console.log(sum);
