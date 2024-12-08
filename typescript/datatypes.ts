// Basic types
let myNumber: number = 42;
let myString: string = "Hello, TypeScript!";
let isDone: boolean = true;

// Arrays
let numberArray: number[] = [1, 2, 3, 4];
let stringArray: string[] = ["apple", "banana", "cherry"];
let booleanArray: boolean[] = [true, false, true];

// const tsName: string | undefined = 'Ritik';

// let lowercase = tsName![0].toUpperCase();


// in jS
// const name = 'Ritik'; // Note: no type annotations

// let lowercase = name && name[0] ? name[0].toUpperCase() : undefined;


// Tuples
let myTuple: [number, string, boolean] = [1, "hello", true];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green;

// Any
let anything: any = "Could be a string";
anything = 42; // Now it's a number

// Unknown
let notSure: unknown = 4;
if (typeof notSure === "number") {
  let newNumber: number = notSure; // TypeScript knows it's a number here
}

// Never
function error(message: string): never {
  throw new Error(message);
}

// Void
function warnUser(): void {
  console.log("This is a warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// BigInt
// let bigIntNumber: bigint = 9007199254740991;

// Object
let user: { name: string; age: number } = { name: "John", age: 30 };

// Type assertion
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Union Types
let unionType: string | number;
unionType = "hello";
unionType = 42;

// Intersection Types
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

let employee: Person & Employee = { name: "Jane", employeeId: 1234 };

// Function with parameter and return type annotations
// function add(a: number, b: number): number {
//   return a + b;
// }

// Interface
interface Point {
  x: number;
  y: number;
}

let point: Point = { x: 10, y: 20 };

// Type alias
type StringOrNumber = string | number;

let sample: StringOrNumber;
sample = "hello";
sample = 123;

// Optional properties
interface Rectangle {
  width: number;
  height?: number; // optional property
}

let rect1: Rectangle = { width: 100 };
let rect2: Rectangle = { width: 100, height: 50 };

// Readonly properties
interface Circle {
  readonly radius: number;
}

let circle: Circle = { radius: 10 };
// circle.radius = 20; // Error: Cannot assign to 'radius' because it is a read-only property.
