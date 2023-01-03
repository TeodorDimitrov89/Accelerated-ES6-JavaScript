/* Objects */
/* Example 1 */

// let obj1 = {
//   a: 1,
// };

// let obj2 = {
//   b: 2,
// };

// let obj = Object.assign(obj1, obj2);
// console.log(obj, "Object Assign");

/* Example 2 */

// class Obj1 {
//   constructor() {
//     this.a = 1;
//   }
// }

// class Obj2 {
//   constructor() {
//     this.b = 2;
//   }
// }

// let obj1 = new Obj1();
// let obj2 = new Obj2();

// let obj = Object.assign(obj1, obj2);

// console.log(obj.__proto__ === Obj1.prototype); //true
// console.log(obj.__proto__ === Obj2.prototype); //false

/* Example 3 */

// class Obj1 {
//   constructor() {
//     this.a = 1;
//   }
// }

// class Obj2 {
//   constructor() {
//     this.b = 2;
//   }
// }

// let obj1 = new Obj1();
// let obj2 = new Obj2();

// let obj = Object.assign({}, obj1, obj2);

// console.log(obj.__proto__ === Obj1.prototype); //false
// console.log(obj.__proto__ === Obj2.prototype); //false
// console.log(obj.__proto__ === Object.prototype); // true

/* Example 4 */

// let person = {};

// let boss = {
//   name: "Marrie",
// };

// console.log(person.__proto__ === Object.prototype); //true

// Object.setPrototypeOf(person, boss);

// console.log(person.__proto__ === Object.prototype); //false

// console.log(person.__proto__ === boss); //true

// console.log(person.name);

/* Numbers */
/* Examples */

// let number = NaN;
// console.log(isNaN(number));

// console.log(Number.isNaN(number)); // added to global Number object as well

// let number = 1000000;
// console.log(Number.isFinite(number)); // new isFinite method to Number object

// let number = 10;
// console.log(Number.isInteger(number)); // new isInteger method to Number object

/* Arrays */

let array = [10, 20, 50];

/* Example 1 */

// let newArray = Array.from(array, (val) => val * 5); //Array.from creates new Array and we can transformed values
// console.log(newArray);

/* Example 2 */

// array.fill(100); // new method "fill" [100, 100, 100]
// array.fill(100, 1, 2); // [10, 100, 50]
// console.log(array);

/* Example 3 */

// console.log(array.find((val) => val > 10)); // Find method

/* Example 4 */

console.log(array.copyWithin(0, 2)); // new method "copyWithin" [50, 20, 50]
