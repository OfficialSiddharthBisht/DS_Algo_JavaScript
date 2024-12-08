// Regular Functions

function add(a: number, b: number): number {
    return a + b;
  }
  
  console.log(add(5, 3)); // Output: 8
  
  // Function Expressions
  const multiply = function (a: number, b: number): number {
    return a * b;
  };
  
  console.log(multiply(4, 5)); // Output: 20
  
  // Arrow Functions
  const subtract = (a: number, b: number): number => {
    return a - b;
  };
  
  console.log(subtract(10, 4)); // Output: 6
  
  // Optional Parameters
  function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
  }
  
  console.log(greet("Alice")); // Output: Hello, Alice!
  console.log(greet("Alice", "Hi")); // Output: Hi, Alice!
  
  // Default Parameters
  
  function power(base: number, exponent: number = 2): number {
    return base ** exponent;
  }
  
  console.log(power(3)); // Output: 9
  console.log(power(3, 3)); // Output: 27
  
  //  Rest Parameters
  
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(4, 5, 6, 7)); // Output: 22
  
  // Function Overloading
  
  function display(value: string): void;
  function display(value: number): void;
  function display(value: string | number): void {
    console.log(`Value: ${value}`);
  }
  
  display("Hello"); // Output: Value: Hello
  display(42); // Output: Value: 42
  
  // Function Types
  type Operation = (a: number, b: number) => number;
  
  // const add: Operation = (a, b) => a + b;
  // const multiply: Operation = (a, b) => a * b;
  
  // console.log(add(5, 3)); // Output: 8
  // console.log(multiply(4, 5)); // Output: 20
  
  // Callback Functions
  
  function fetchData(url: string, callback: (data: string) => void): void {
    // Simulate fetching data
    const data = "Sample data from " + url;
    callback(data);
  }
  
  fetchData("https://api.example.com", (data) => {
    console.log(data); // Output: Sample data from https://api.example.com
  });
  
  // //   Generic Functions
  // function identity<T>(arg: T): T {
  //   return arg;
  // }
  
  // console.log(identity<string>("Hello")); // Output: Hello
  // console.log(identity<number>(42)); // Output: 42