// let tuple: [string, number, string?] = ["foo", 0, "uhyo"];
// tuple = ["aiueo", -555]
// console.log(tuple[0]);

import { time } from "console";

// const str = tuple[0];
// const num = tuple[1];
// const nothing = tuple[2];

// type User = [name: string, age: number];
// const uhyo: User = ["uhyo", 26];
// console.log(uhyo[1]);

// const arr = [1, 10, 100];
// const num: number = arr[100];
// console.log(num);

// const { foo, bar } = obj;

// const foo = obj.foo;
// const bar = obj.bar;

// const {
//   foo,
//   bar: barVar,
//   "foo bar": foobar
//  } = obj;

//  const obj = {
//   str: "hello, world!",
//   num: 1234
//  };

//  const {
//   foo
//  } = obj;

// const nested = {
//   num: 123,
//   obj: {
//     foo: "hello",
//     bar: "world"
//   }
// }

// const { num, obj: { foo } } = nested;

// console.log(num);
// console.log(foo);

// const arr = [1, 2, 4, 8, 16, 32];

// const [first, second, third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);

// const first = arr[0];
// const second = arr[1];
// const third = arr[2];

// const [{ name }] = arr;

// const arr = [1, 2, 4, 8, 16, 32];

// const [, foo, , bar, , baz] = arr;
// console.log(foo);
// console.log(bar);
// console.log(baz);

// const tuple: [string, number] = ["uhyo", 26];
// const [myName, age] = tuple;

// console.log(myName);
// console.log(age);

// const obj = {
//   arr: [1, 2, 4, 8, 16, 32]
// };
// const { arr: [foo] } = obj;
// console.log(foo);

// const obj = {
//   arr: [
//     { name: 'Taro', age: 20 },
//     { name: 'Bob', age: 30 },
//   ],
// };

// const { arr: [foo] } = obj;

// console.log(foo);

// const { arr: [{ name }]} = obj;

// console.log(name);

// type Obj = { foo?: number};
// const obj1: Obj = {};
// const obj2: Obj = { foo: -1234 };

// const { foo = 500 } = obj1;
// console.log(foo);

// const { foo: bar = 500 } = obj2;
// console.log(bar);

// const foo = obj.foo !== undefined ? obj.foo : 500;

// const obj = {foo: null};

// const { foo = 123 } = obj;
// console.log(foo);

// type Obj = { foo?: number };
// const obj1: Obj = {};
// const { foo = 500 } = obj1;

// type NestedObj = {
//   obj?: {
//     foo: number;
//   };
// };
// const nested1: NestedObj = {
//   obj: { foo: 123}
// };
// const nested2: NestedObj = {};

// const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
// const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
// console.log(foo1);
// console.log(foo2);

// const obj = {
//   foo: 123,
//   bar: "string",
//   baz: false,
// };

// const { foo, ...restObj } = obj;

// console.log(foo);
// console.log(restObj);
// restObj.bar = "abc";
// console.log(restObj);

// console.log(obj);
// console.log(obj.bar);

// const arr = [1, 1, 2, 3, 5, 8, 13];
// const [first, second, third, ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(rest);

// const d = new Date();
// console.log(d);
// console.log(d.toString());
// console.log(d.toISOString());

// d.setFullYear(2030);
// console.log(d);

// const date = new Date("2020-02-03T15:00:00+09:00");
// const timeNum = date.getTime();
// console.log(timeNum);

// const date2 = new Date(timeNum);
// console.log(date2.toString());

// console.log(Date.now());

// const r = /ab+c/;

// console.log(r.test("abbbbc"));
// console.log(r.test("Hello, abc world!"));
// console.log(r.test("ABC"));
// console.log(r.test("こんにちは"));

// const r = /abc/y;

// r.lastIndex = 5;
// console.log(r.test("xxxabcdefg"));
// console.log(r.test("Hello, abcdefg"));

// console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/, "foobar"))
// console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/g, "foobar"))

// const result = "Hello, abbbbbbbc world! abc".match(/a(b+)c/g);
// console.log(result);
// if (result !== null) {
//   console.log(result[0]);
//   console.log(result[1]);
// }

const result = "Hello, abbbbbbbc world! abc".match(/a(?<worldName>b+)c/);
if (result !== null) {
  console.log(result.groups);
}
