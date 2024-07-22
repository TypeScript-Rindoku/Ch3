// type Family<Parent, Child> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };

// const obj: Family<number, string> = {
//   mother: 0,
//   father: 100,
//   child: "1000",
// };

// const obj2: Family = { // 型引数が足りない
//   mother: 0,
//   father: 100,
//   child: "1000",
// }

// const obj3: Family<boolean, number> = {
//   mother: true,
//   father: false,
//   child: 1000,
// };


// type Family<Parent extends HasName, Child extends HasName> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };

// type T1 = Family< {name: string}, {name: string}>;

// type Animal = {
//   name: string;
// };
// type Human = {
//   name: string;
//   age: number;
// };

// type T2 = Family<Animal, Human>;

// type Family2<Parent extends HasName, Child extends Parent> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };

// type S = Family2<Animal, Human>;
// // type T = Family2<Human, Animal>;

// type HasName = {
//   name: string;
// };

// type Animal = {
//  name: string;
// }
// type Family<Parent = Animal, Child = Animal> = {
// type Family<Parent, Child = Animal> = {
// type Family<Parent extends HasName, Child extends HasName = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }

// type S = Family<string, string>;
// type T = Family;
// type U = Family<string>;

// const arr = [0, 123, -456 * 100];
// console.log(arr);
// console.log(arr.length);

// const arr2 = [100, "文字列", false];

// const arr1 = [4, 5, 6];
// const arr2 = [1, 2, 3, ...arr1];

// console.log(arr2);

// const arr = [0, 123, -456 * 100];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr);

// arr[1] = 5400;
// console.log(arr);
// arr = [1, 2, 345, 67];

// const arr: number[] = [1, 10, 100];
// const arr2: string[] = [123, -456];

// const arr1: boolean[] = [false, true];

// const arr2: Array<{
//   name: string;
// }> = [
//   { name: "山田さん"},
//   { name: "田中さん"},
//   { name: "鈴木さん"}
// ];

// const arr = [1, 10, 100];
// const arr3: (number | string | boolean)[] = [100, "文字列", false];

// const arr: readonly number[] = [1, 10, 100];

// arr[1] = -500;

// const arr = [1, 10, 100];
// arr.push(1000);
// console.log(arr);

// arr.push("foobar");

// const arr: readonly number[] = [1, 10, 100];
// arr.push(1000);

// const arr = [1, 10, 100];
// console.log(arr.indexOf(100));
// console.log(arr.indexOf(50));
// console.log(arr.indexOf(1));
// console.log(arr.includes(50));

// console.log(arr.includes("foobar"));

// const arr = [1, 10, 100];
// console.log(arr.length);
// arr.push(1000);
// console.log(arr.length);

// const arr: (string | number)[] = ["hoge", "fuga"];
// arr.push(1000);
// console.log(arr);

// arr.push("foobar");
// console.log(arr);

// // [].includes
[].indexOf
// [1, 10, 100].length

// const arr = ["hoge", "fuga"];
// for (let elm of arr) {
//   for (let elm2 of elm){
//     console.log(elm2);
//   }
// }
// console.log(arr);

// let tuple: [string, number, string?] = ["foo", 0, "uhyo"];
// tuple = ["aiueo", -555]
// console.log(tuple[0]);

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
