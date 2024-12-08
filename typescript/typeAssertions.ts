
// Type assertions in TypeScript are a way to tell the compiler to treat a value as a specific type. 
// They don’t perform any runtime checks or
//  type conversions but are useful for cases where you, as the developer,
//   have more information about the type than TypeScript’s type inference system.

// Syntax
// TypeScript provides two syntaxes for type assertions:

// Angle-Bracket Syntax: (value as Type)
// as Keyword Syntax: <Type>value
// Here’s how you can use both syntaxes:

// let someValue: any = "This is a string";

// // Using 'as' syntax
// let strLength1: number = (someValue as string).length;

// // Using angle-bracket syntax
// let strLength2: number = (<string>someValue).length;

// console.log(strLength1); // Output: 16
// console.log(strLength2); // Output: 16

// Example 2: Assertions with DOM Manipulation
// Sometimes, when working with the DOM, you might need to assert that an element has a certain type.


// let myInput = document.getElementById("myInput") as HTMLInputElement;
// myInput.value = "Hello, TypeScript!";

// let anotherInput = <HTMLInputElement>document.getElementById("anotherInput");
// anotherInput.value = "Another input";
// Example 3: Assertions with Custom Types
// You can also use type assertions with custom types or interfaces.


// interface Person {
//     name: string;
//     age: number;
// }

// let personData: any = {
//     name: "Alice",
//     age: 30
// };

// // Using 'as' syntax
// let person1: Person = personData as Person;

// // Using angle-bracket syntax
// let person2: Person = <Person>personData;

// console.log(person1.name); // Output: Alice
// console.log(person2.age); // Output: 30
// Example 4: Narrowing Down Types
// Type assertions can also help in narrowing down types when working with union types.


// function printId(id: number | string) {
//     // Assert that id is a number
//     let idNumber: number = id as number;
//     console.log(idNumber.toFixed(2)); // Output depends on id's value
// }

// // Example usage
// printId(123); // Output: 123.00
// printId("456"); // Output: Error at runtime, but TypeScript assumes id is a number
// Example 5: Working with JSON
// When parsing JSON data, you might want to assert the shape of the data.


// interface User {
//     id: number;
//     name: string;
// }

// let jsonData: any = '{"id": 1, "name": "Bob"}';
// let user: User = JSON.parse(jsonData) as User;

// console.log(user.id);   // Output: 1
// console.log(user.name); // Output: Bob
// Example 6: Conditional Type Assertions
// You can use type assertions in combination with conditional checks to ensure type safety.


// function handleResponse(response: any) {
//     if (response.success) {
//         let successData = response.data as { message: string };
//         console.log(successData.message);
//     } else {
//         console.log("Error:", response.error as string);
//     }
// }

// // Example usage
// handleResponse({ success: true, data: { message: "Operation successful" } });
// handleResponse({ success: false, error: "Something went wrong" });
// Summary
// Type assertions let you override TypeScript’s type inference, asserting a value to be of a specific type.
// They do not perform type checks or type conversions but are useful for scenarios where you know more about the type than TypeScript can infer.
// Use angle-bracket syntax (<Type>value) or the as keyword syntax (value as Type) depending on your preference or coding standards.