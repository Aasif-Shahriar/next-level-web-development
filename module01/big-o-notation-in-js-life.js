// ! simple for loop | now we will how much time it will take using built in api.
// const startTime = performance.now();
// console.time("task");
// for (let i = 0; i <= 5000; i++) {
//   console.log(i);
// }
// const endTime = performance.now();
// console.log(`this code took: ${endTime - startTime}`);
// console.timeEnd("task");

//! Comparison - 2:
const firstArr = [];
const secArr = [];

for (let i = 0; i < 500000; i++) {
  if (i < 250000) {
    firstArr.push(i);
  }
  secArr.push(i);
}

console.log("first array", firstArr.length);
console.log("second array", secArr.length);

//? now let see the time gap between to array.
console.time("map-1");
const firstUser = firstArr.map((number) => ({ userId: number }));
console.timeEnd("map-1");

console.time("map-2");
const secondUSer = secArr.map((number) => ({ userId: number }));
console.timeEnd("map-2");

// ? now let's use find to see what exactly happen.
console.time("find");
// const user = secArr.find((user) => user.userId === 20000);
const user = secArr[5000];
console.timeEnd("find");
