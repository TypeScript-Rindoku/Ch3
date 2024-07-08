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
// type Myobj = {
//   foo: boolean;
//   bar: boolean;
//   baz?: number;
//  };
// const obj: Myobj = { foo: false, bar: true };
// const obj2: Myobj = { foo: true, bar: false, baz: 1234 };

// // console.log(obj.baz);
// // console.log(obj2.baz);
// // console.log(obj2.baz * 1000);

// if (obj2.baz !== undefined) {
//   console.log(obj2.baz * 1000);
// }

// type Myobj = {
//   readonly foo: number;
// }
// const obj: Myobj = { foo: 123 };
// obj.foo = 0;

// const num: number = 0;
// type T = typeof num;
// const foo: T = 123;

// const obj = {
//   foo: 123,
//   bar: "hi"
// };

// type T = typeof obj;
// const obj2: T = {
//   foo: -50,
//   bar: ""
// };

// const res: typeof foo = typeof bar;

// type User = { name:string; age: number };

// const commandList = ["attack", "defend", "run"] as const;
// type Command = typeof commandList[number];

// type Command = "attack" | "defend" | "run";
// const commandList: Command[] = ["attack", "defend", "run"];

// type FooBar = {
//   foo: string;
//   bar: number;
// }
// type FooBarBaz = {
//   foo: string;
//   bar: number;
//   baz: boolean;
// }

// const obj: FooBarBaz = {
//   foo: "hi",
//   bar: 1,
//   baz: false
// };
// const obj2: FooBar = obj;

type Animal = {
  age: number;
};
type Human = {
  age: number;
  name: string;
};

type AnimalFamily = {
  familyName: string;
  mother: Animal;
  father: Animal;
  child: Animal;
};
type HumanFamily = {
  familyName: string;
  mother: Human;
  father: Human;
  child: Human;
};

type User = { name: string; age: number };
const obj = {
  name: "Uhyo",
  age: 26,
  tellNumber: "09012345678",
};
const u: User = obj;
