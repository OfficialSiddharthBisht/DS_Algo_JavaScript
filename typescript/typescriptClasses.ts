// class Person {
//     // Public property
//     public name: string;

//     // Private property
//     private age: number;

//     // Protected property
//     protected address: string;

//     // Readonly property
//     readonly birthDate: Date;

//     // Constructor
//     constructor(name: string, age: number, address: string, birthDate: Date) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.birthDate = birthDate;
//     }

//     // Getter for age
//     public getAge(): number {
//         return this.age;
//     }

//     // Setter for age
//     public setAge(age: number): void {
//         if (age > 0) {
//             this.age = age;
//         } else {
//             console.error("Age must be positive.");
//         }
//     }

//     // Getter for address
//     protected getAddress(): string {
//         return this.address;
//     }

//     // Setter for address
//     protected setAddress(address: string): void {
//         this.address = address;
//     }
// }

// // Example usage
// const person = new Person("John Doe", 30, "123 Main St", new Date("1990-01-01"));

// console.log(person.name); // Public property, accessible
// console.log(person.getAge()); // Using getter for private property

// person.setAge(31); // Using setter for private property
// console.log(person.getAge());

// // Accessing protected property or methods directly from instance is not possible
// // console.log(person.address); // Error: Property 'address' is protected and only accessible within class 'Person' and its subclasses.
// // console.log(person.getAddress()); // Error: Property 'getAddress' is protected and only accessible within class 'Person' and its subclasses.

// console.log(person.birthDate); // Readonly property, accessible but cannot be modified
// // person.birthDate = new Date("2000-01-01"); // Error: Cannot assign to 'birthDate' because it is a read-only property.