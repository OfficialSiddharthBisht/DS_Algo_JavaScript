// TypeScript supports various literal types that can be used to specify exact values for variables,
//  function parameters, and return types. Literal types are helpful for creating more precise
//   and constrained types in your TypeScript code.

// Literal Types
// 1. String Literal Types

// You can specify exact string values that a variable or parameter can hold.


// // String literal type
// type Greeting = "hello" | "hi" | "hey";

// function greet(greeting: Greeting) {
//     console.log(greeting);
// }

// greet("hello"); // Valid
// greet("hi");    // Valid
// greet("hey");   // Valid
// // greet("goodbye"); // Error: Argument of type '"goodbye"' is not assignable to parameter of type 'Greeting'.
// 2. Number Literal Types

// You can specify exact numeric values that a variable or parameter can hold.


// // Number literal type
// type Age = 18 | 21 | 30;

// function canDrinkAlcohol(age: Age) {
//     console.log(age >= 21 ? "Can drink alcohol" : "Cannot drink alcohol");
// }

// canDrinkAlcohol(18); // Output: Cannot drink alcohol
// canDrinkAlcohol(21); // Output: Can drink alcohol
// canDrinkAlcohol(30); // Output: Can drink alcohol
// // canDrinkAlcohol(25); // Error: Argument of type '25' is not assignable to parameter of type 'Age'.
// 3. Boolean Literal Types

// You can specify exact boolean values.


// // Boolean literal type
// type Status = true | false;

// function setStatus(status: Status) {
//     console.log(status ? "Active" : "Inactive");
// }

// setStatus(true);  // Output: Active
// setStatus(false); // Output: Inactive
// // setStatus("active"); // Error: Argument of type '"active"' is not assignable to parameter of type 'Status'.
// 4. Object Literal Types

// You can define exact object structures with literal types.


// // Object literal type
// type Point = { x: 10; y: 20 };

// function logPoint(point: Point) {
//     console.log(`x: ${point.x}, y: ${point.y}`);
// }

// logPoint({ x: 10, y: 20 }); // Output: x: 10, y: 20
// // logPoint({ x: 10 }); // Error: Property 'y' is missing in type '{ x: 10; }' but required in type 'Point'.
// 5. Union of Literal Types

// Combining multiple literal types into a union.


// type Action = "add" | "delete" | "update";

// function performAction(action: Action) {
//     switch (action) {
//         case "add":
//             console.log("Adding item...");
//             break;
//         case "delete":
//             console.log("Deleting item...");
//             break;
//         case "update":
//             console.log("Updating item...");
//             break;
//         default:
//             // This case is unreachable because of the type constraint
//             console.log("Unknown action");
//     }
// }

// performAction("add");    // Output: Adding item...
// performAction("delete"); // Output: Deleting item...
// performAction("update"); // Output: Updating item...
// // performAction("remove"); // Error: Argument of type '"remove"' is not assignable to parameter of type 'Action'.
// 6. Literal Types with Generics

// Combining literal types with generics for more flexibility.


// type Result<T extends string | number> = { value: T };

// function processResult<T extends string | number>(result: Result<T>) {
//     console.log(result.value);
// }

// processResult({ value: 42 });         // Output: 42
// processResult({ value: "TypeScript" }); // Output: TypeScript
// Summary
// String Literal Types: Restrict values to specific strings.
// Number Literal Types: Restrict values to specific numbers.
// Boolean Literal Types: Restrict values to true or false.
// Object Literal Types: Define exact object structures.
// Union of Literal Types: Combine multiple literals into a union type.
// Literal Types with Generics: Use literals with generics for more flexible type constraints.
// Literal types enhance type safety and help catch errors early by restricting values to a predefined set of possible values.