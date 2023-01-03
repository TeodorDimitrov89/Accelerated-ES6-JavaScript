/* 
  Iterators
*/
// let array = [1, 2, 3];

// array[Symbol.iterator] = function () {
//   let nextValue = 7;
//   return {
//     next: function () {
//       nextValue++;
//       return {
//         done: nextValue > 15 ? true : false,
//         value: nextValue,
//       };
//     },
//   };
// };

// for (let element of array) {
//   console.log(element);
// }

// let person = {
//   name: "Teo",
//   hobbies: ["Sport", "Cooking"],
//   [Symbol.iterator]: function () {
//     let i = 0;
//     let hobbies = this.hobbies;
//     return {
//       next: function () {
//         let value = hobbies[i];
//         i++;
//         return {
//           done: i > hobbies.length ? true : false,
//           value: value,
//         };
//       },
//     };
//   },
// };

// for (let hobby of person) {
//   console.log(hobby);
// }

/* 
  Generators
*/

//example 1

// let obj = {
//   [Symbol.iterator]: gen,
// };

// function* gen() {
//   yield 1;
//   yield 2;
// }

// for (let element of obj) {
//   console.log(element, "object Element");
// }

//example 2
function* gen(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i;
    } catch (e) {
      console.log(e);
    }
  }
}

let it = gen(2);
console.log(it.next());
console.log(it.next());
console.log(it.throw("An error occured!"));
console.log(it.next());
