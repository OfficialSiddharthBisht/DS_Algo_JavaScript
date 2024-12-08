function identity<T>(arg: T): T {
    return arg;
}

// Using the generic function with different types
let output1 = identity<string>("myString");
let output2 = identity<number>(100);

console.log(output1); // Output: myString
console.log(output2); // Output: 100


// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;
// console.log(myIdentity(10)); // Output: 10

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

console.log(myGenericNumber.add(5, 10)); // Output: 15

let myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "";
myGenericString.add = (x, y) => x + y;

console.log(myGenericString.add("Hello, ", "world!")); // Output: Hello, world!


interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity({ length: 10, value: 3 }); // Output: 10


// Generic Interfaces with Default Types
// You can provide default types for generic parameters.


// interface GenericInterface<T = string> {
//     value: T;
// }

// let stringGeneric: GenericInterface = { value: "Hello" };
// let numberGeneric: GenericInterface<number> = { value: 42 };

// console.log(stringGeneric.value); // Output: Hello
// console.log(numberGeneric.value); // Output: 42