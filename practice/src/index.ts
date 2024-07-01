// const obj = {
//   foo: 123,
//   bar: "Hello, world!"
// };

// console.log(obj.foo);
// console.log(obj.bar);

// const name = input ? input : "名無し";
// const user = {
// name: name,
// age: 20,
// };

// type FooBarObj = {
//   foo: number;
//   bar: string;
// };
// const obj: FooBarObj = {
//     foo: 123,
//     bar: "Hello, world!"
// };

// type UserId = string;
// const id: UserId = "uhyo";

// type FooObj = { foo: number };
// type Myobj = FooObj;

// const obj: Myobj = { foo: 0};

// interface FooBarObj {
//   foo: number;
//   bar: string;
// }
// const obj: FooBarObj = {
//     foo: 0,
//     bar: "string"
// };
// type PriceData = {
//   [key: string]: number;
// }
// const data: PriceData = {
//   apple: 220,
//   coffee: 120,
//   bento: 500
// };
// data.chicken = 250;
// data.弁当 = 600;
// type Myobj = { [key: string]: number };
// const obj: Myobj = { foo: 123 };
// const num: number = obj.bar;
// console.log(num);
// const propName: string = "foo";
// const obj = {
//   [propName]: 123
// };
// console.log(obj.foo);
type Myobj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
 };
const obj: Myobj = { foo: false, bar: true };
const obj2: Myobj = { foo: true, bar: false, baz: 1234 };

// console.log(obj.baz);
// console.log(obj2.baz);
// console.log(obj2.baz * 1000);

if (obj2.baz !== undefined) {
  console.log(obj2.baz * 1000);
}
