//filter
//coustom filter

let arr = [1, 2, 1, 3, 1, 4, 5, 6];
let sentence = "hello how are you ";

// let ob = {};
// for (let ob of arr) {
//   console.log(ob);
// }

let filter = arr.filter(r => r !== 1);
let odd = arr.filter(r => r % 2 === 1);
let even = arr.filter(r => !(r % 2));
const word = sentence.split("");
//console.log(filter);
//console.log(odd);
//console.log(even);
console.log(word.filter(r => r.length > 0));
