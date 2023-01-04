/*

  Maps

*/

// let cardAce = {
//   name: "Ace of Spades",
// };

// let cardKing = {
//   name: "King of Clubs",
// };

// let desk = new Map();

// desk.set("as", cardAce);
// desk.set("kc", cardKing);

// // console.log(desk.size);
// // console.log(desk.delete("kc"));

// // console.log(desk.size);

// console.log(desk.get("as"));

// for (let key of desk.keys()) {
//   //getting keys
//   console.log(key, "key");
// }

// for (let value of desk.values()) {
//   //getting values
//   console.log(value, "value");
// }

// for (let entry of desk) {
//   //getting entries key->values
//   console.log(entry, "entry");
// }

/*

  Sets

*/

let set = new Set([1, 1, 1]);

set.add(2);
// set.delete(1);
// set.clear()
set.has(1);

for (let element of set) {
  console.log(element);
}
