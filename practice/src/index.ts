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

const arr = [0, 123, -456 * 100];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr);

arr[1] = 5400;
console.log(arr);
// arr = [1, 2, 345, 67];
