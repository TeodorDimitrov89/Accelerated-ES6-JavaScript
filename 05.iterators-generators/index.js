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

let person = {
  name: "Teo",
  hobbies: ["Sport", "Cooking"],
  [Symbol.iterator]: function () {
    let i = 0;
    let hobbies = this.hobbies;
    return {
      next: function () {
        let value = hobbies[i];
        i++;
        return {
          done: i > hobbies.length ? true : false,
          value: value,
        };
      },
    };
  },
};

for (let hobby of person) {
  console.log(hobby);
}
