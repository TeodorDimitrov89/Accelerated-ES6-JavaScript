let array = [1, 2, 3];

array[Symbol.iterator] = function () {
  let nextValue = 7;
  return {
    next: function () {
      nextValue++;
      return {
        done: nextValue > 15 ? true : false,
        value: nextValue,
      };
    },
  };
};

for (let element of array) {
  console.log(element);
}
