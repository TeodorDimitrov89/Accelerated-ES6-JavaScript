let array = [1, 2, 3];

let iterator = array[Symbol.iterator]();

console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
