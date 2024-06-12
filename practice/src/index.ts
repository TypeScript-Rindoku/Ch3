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

const propName = "foo";
const obj = {
  [propName]: 123,
};

console.log(obj.foo);
