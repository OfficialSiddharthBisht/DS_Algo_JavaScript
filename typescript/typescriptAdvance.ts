// TypeScript provides a variety of advanced features that enhance JavaScript by adding static types and other type-related capabilities. Below are some additional TypeScript features that help developers write safer and more maintainable code:

// 1. Enums
// Enums allow you to define a set of named constants.


// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }

// let dir: Direction = Direction.Up;
// 2. Namespaces
// Namespaces provide a way to organize and manage code, especially when dealing with large codebases.


// namespace Validation {
//     export function validateName(name: string): boolean {
//         return name.length > 0;
//     }

//     export function validateAge(age: number): boolean {
//         return age > 0;
//     }
// }

// const isValidName = Validation.validateName('John'); // true
// const isValidAge = Validation.validateAge(25); // true
// 3. Intersection Types
// Intersection types allow you to combine multiple types into one.


// interface Person {
//     name: string;
// }

// interface Employee {
//     employeeId: number;
// }

// type EmployeePerson = Person & Employee;

// let employee: EmployeePerson = {
//     name: "Alice",
//     employeeId: 123
// };
// 4. Type Guards
// Type guards allow you to create more specific type checks within code blocks.


// function isString(value: any): value is string {
//     return typeof value === "string";
// }

// function example(value: string | number) {
//     if (isString(value)) {
//         console.log("It's a string:", value);
//     } else {
//         console.log("It's a number:", value);
//     }
// }
// 5. Abstract Classes
// Abstract classes are base classes that cannot be instantiated directly and are meant to be extended by other classes.


// abstract class Animal {
//     abstract makeSound(): void;

//     move(): void {
//         console.log("Moving...");
//     }
// }

// class Dog extends Animal {
//     makeSound(): void {
//         console.log("Bark");
//     }
// }

// let dog = new Dog();
// dog.makeSound(); // Bark
// dog.move(); // Moving...
// 6. Index Signatures
// Index signatures allow you to define types for dynamic property keys.


// interface StringArray {
//     [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0]; // Bob
// 7. Type Aliases
// Type aliases create new names for types.


// type Name = string;
// type NameOrNumber = Name | number;

// let nameOrNumber: NameOrNumber;
// nameOrNumber = "Alice";
// nameOrNumber = 42;
// 8. Keyof Operator
// The keyof operator creates a union type of the keys of an object.


// interface Person {
//     name: string;
//     age: number;
// }

// type PersonKeys = keyof Person; // 'name' | 'age'
// 9. Lookup Types
// Lookup types allow you to retrieve the type of a specific property in an object type.


// interface Person {
//     name: string;
//     age: number;
// }

// type NameType = Person["name"]; // string
// 10. Conditional Types
// Conditional types allow you to define types that depend on a condition.


// type IsString<T> = T extends string ? true : false;

// type Test1 = IsString<string>; // true
// type Test2 = IsString<number>; // false
// 11. Utility Types
// TypeScript includes several utility types for common type transformations.

// Partial: Makes all properties optional.
// Required: Makes all properties required.
// Readonly: Makes all properties read-only.
// Record: Creates a type with a set of properties of a given type.
// Pick: Creates a type by picking a subset of properties.
// Omit: Creates a type by omitting a subset of properties.
// Exclude: Excludes types from a union.
// Extract: Extracts types from a union.
// NonNullable: Excludes null and undefined from a type.
// ReturnType: Gets the return type of a function.
// InstanceType: Gets the instance type of a constructor function.

// interface Person {
//     name: string;
//     age: number;
// }

// // Partial
// type PartialPerson = Partial<Person>; // { name?: string; age?: number; }

// // Required
// type RequiredPerson = Required<Person>; // { name: string; age: number; }

// // Readonly
// type ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; }

// // Record
// type NameRecord = Record<"firstName" | "lastName", string>; // { firstName: string; lastName: string; }

// // Pick
// type NameOnly = Pick<Person, "name">; // { name: string; }

// // Omit
// type AgeOnly = Omit<Person, "name">; // { age: number; }
// 12. Declaration Merging
// Declaration merging allows you to merge multiple declarations into a single entity.


// interface User {
//     name: string;
// }

// interface User {
//     age: number;
// }

// const user: User = { name: "Alice", age: 25 };
// Summary
// TypeScript offers a rich set of features that extend beyond standard JavaScript, providing powerful tools for creating robust and maintainable code. These advanced features include enums, namespaces, intersection types, type guards, abstract classes, index signatures, type aliases, the keyof operator, lookup types, conditional types, utility types, and declaration merging. Understanding and leveraging these features can significantly improve your TypeScript development experience.