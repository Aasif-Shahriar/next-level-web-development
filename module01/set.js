const set = new Set();
// add anything using set.add:
set.add("apple");
set.add("mango");
set.add("banana");
set.add("banana"); // no, duplication works in Set
// console.log(set);

// if you want to check the length of set or want to know how much elements are there. just use set.size
console.log(set.size);

//! no array methods work on Set, only forEach works.
const arr = ["apple", "mango", "banana", "apple"];
// suppose you want to remove the duplicates from array. so you can just use Set.
const set2 = new Set(arr);

// after using set again make it an array using this method.
const test = Array.from(set2); //! now we can use any array methods on this new array.

//? only forEach works on Set.
// const test = set2.forEach((item) => console.log(item));

console.log("set2", test);

console.log(set2.has("banana"));
//! some set methods:
/** 
 * set.has("tomato") - this method check if there is any item called tomato.
 * set.delete('banana') - to delete  an entry

**/

//? how set works efficiently: suppose you have an arr and you want to remove the duplicates.
const fruits = ["mango", "tomato", "kiwi", "apple", "mango"];

// Brute force
const removeDupBrute = (arr) => {
  const newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};
console.log(removeDupBrute(fruits));
// Set implementation
const removeDupSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};
console.log(removeDupSet(fruits));
