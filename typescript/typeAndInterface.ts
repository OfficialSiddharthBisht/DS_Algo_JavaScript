// TypeScript infers the type as number
let inferredNumber = 42;

// TypeScript infers the type as string
let inferredString = "Hello, TypeScript!";

// TypeScript infers the type as boolean
let inferredBoolean = true;

type User = {
  name: string;
  age: number;
};

interface Persons {
  name: string;
  age: number;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
}

interface Car extends Vehicle {
  isElectric: boolean;
}

const myCar: Car = {
  make: "Tesla",
  model: "Model S",
  year: 2021,
  isElectric: true,
};

interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

class Manager implements Employee {
  name: string;
  employeeId: number;
  constructor(name: string, employeeId: number) {
    this.name = name;
    this.employeeId = employeeId;
  }
}

type VehicleT = {
  make: string;
  model: string;
  year: number;
};

type CarT = VehicleT & {
  isElectric: boolean;
};

const myCarT: CarT = {
  make: "Tesla",
  model: "Model S",
  year: 2021,
  isElectric: true,
};

//Use interfaces when you need to define the shape of an object,
// especially if you expect to extend or merge them.

// Use types for more complex type definitions like
// unions, intersections, and for aliasing primitive types.