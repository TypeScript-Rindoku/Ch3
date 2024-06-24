// const obj = {
//   "foo": 123,
//   "foo bar": -500,
//   '↑↓↑': "",
// };

// const name = input ? input : "名無し",

// const user = {
//   name,
//   age: 20,
// };

// const obj = {
//   1: "one",
//   2.05: "two point o five",
// };

// const propName = "foo";
// const obj = {
//   [propName]: 123,
// };

// console.log(obj.foo);

// const user = {
//   name: "uhyo",
//   age: 25,
// };

// user.age = 26;
// console.log(user.age);

// import { createInterface } from "readline";

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const messages = {
//   good: "0以上の数値が入力されました！",
//   bad: "負の数値を入力しないでください！",
// };

// rl.question("数値を入力してください:", (line) => {
//   const num = Number(line);
//   console.log(messages[num >= 0 ? "good" : "bad"]);
//   rl.close();
// });

// const user = {
//   name: "uhyo",
//   age: 25,
// };
// console.log(user.name);

// user.name = "John Smith";
// console.log(user.name);

// const obj1 = {
//   bar: 456,
//   baz: 789,
// };

// const obj2 = {
//   foo: 123,
//   ...obj1,
// };

// console.log(obj2);

// const obj1 = {
//   foo: 123,
//   bar: 456,
//   baz: 789,
// };

// const obj2 = {
//   ...obj1,
//   foo: -9999,
// };

// console.log(obj2);

const obj1 = {
  foo: 123,
  bar: 456,
};

const obj2 = {
  bar: -999,
  baz: -9999,
};

const obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj3);
