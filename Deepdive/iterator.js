const isIterable = (value) => value !== null && typeof value[Symbol.iterator] === 'function';
console.log(isIterable([])); // true
console.log(isIterable('')); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log(isIterable({})); // false

// const obj = { a: 1, b: 2 };
// console.log(Symbol.iterator in obj); // false
// for (const iter of obj) {
//   console.log(iter); // TypeError: obj is not iterable
// }

const array = [1, 2, 3];
const iterator = array[Symbol.iterator]();

console.log('next' in iterator); // true

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
