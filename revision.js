// find the sum of all elements in the array
// function sumOfArr(N, arr, i) {
//     let sum = 0;
//     //base case
//     if (i === N) {
//         return 0;
//     }
//     sum += arr[i] + sumOfArr(N, arr, i + 1);
//     return sum;
// }


// function runProgram(input) {
//     input = input.trim().split("\n");
//     let testCases = parseInt(input[0]);
//     let line = 1;
//     for (let t = 0; t < testCases; t++) {
//         let N = parseInt(input[line++]);
//         let arr = input[line++].trim().split(" ").map(Number);
//         console.log(sumOfArr(N, arr, 0));
//     }
// }

// runProgram(`3
// 5
// 6 3 8 2 -4
// 5
// -10 -7 10 2 -2
// 5
// -4 -5 6 -3 9`)

// To find if the given array is sorted ?

// function isArrSorted(N, arr, i) {
//     if (i === N) {
//         return true;
//     }
//     if (arr[i] > arr[i + 1]) {
//         return false;
//     }
//     return isArrSorted(N, arr, i + 1);
// }

// function runProgram(input) {
//     input = input.trim().split("\n");
//     let N = parseInt(input[0]);
//     let arr = input[1].trim().split(" ").map(Number);
//     console.log(isArrSorted(N, arr, 0));
// }
// runProgram(`5
// 1 2 3 4 5`)
// runProgram(`5
// 3 5 2 6 8`)

// Remove specific character from the string
// function removeSpecificChar(N, char, str, i, newStr) {
//     if (i === N) {
//         return newStr;
//     }
//     if (str[i] !== char) {
//         newStr += str[i];
//     }
//     return removeSpecificChar(N, char, str, i + 1, newStr);
// }
// function runProgram(input) {
//     input = input.trim().split("\n");
//     let [N, char] = input[0].trim().split(" ");
//     N = parseInt(N);
//     let str = input[1].trim();
//     console.log(removeSpecificChar(N, char, str, 0, ""));
// }

// runProgram(`5 a
// abbac`)

// Two sum
// function twoSum(N, K, arr) {
//     let front = 0;
//     let back = N - 1;
//     while (front !== back) {
//         if (arr[front] + arr[back] === K) {
//             return `${front}  ${back}`
//         }
//         if (arr[front] + arr[back] < K) {
//             front++;
//         }
//         if (arr[front] + arr[back] > K) {
//             back--;
//         }
//     }
//     return "-1 -1"
// }
// function runProgram(input) {
//     input = input.trim().split("\n");
//     let testCases = parseInt(input[0]);
//     let line = 1;
//     for (let t = 0; t < testCases; t++) {
//         let [N, K] = input[line++].trim().split(" ").map(Number);
//         let arr = input[line++].trim().split(" ").map(Number);
//         console.log(twoSum(N, K, arr));
//     }
// }
// runProgram(`3
// 4 9
// 2 7 11 15
// 5 10
// 1 2 3 5 5
// 2 100
// 48 49`)

// check palindrome
// function isPalindrome(str) {
//     let front = 0;
//     let back = str.length - 1;
//     while (front <= back) {
//         if (str[front] !== str[back]) {
//             return false;
//         }
//         front++;
//         back--;
//     }
//     return true;
// }
// console.log(isPalindrome('maam'));

// Stack implementation by array
// class Stack {
//     constructor() {
//         this.arr = [];
//         this.top = -1;
//     }

//     // Methods of stack
//     push(ele) {
//         this.top++;
//         this.arr[this.top] = ele;
//     }
//     pop() {
//         let poppedElement = this.arr[this.top];
//         if (!poppedElement) {
//             return null;
//         }
//         delete this.arr[this.top];
//         this.top--;
//         return poppedElement;
//     }
//     peak() {
//         return this.arr[this.top];
//     }
// }
// let stack = new Stack();
// stack.push(5);
// stack.push(6);
// stack.pop();
// stack.peak();
// console.log(stack);

// Brackets match stack problem

// function bracketsMatch(brackets) {
//     let stack = new Stack();
//     let N = brackets.length;
//     for (let i = 0; i < N; i++) {
//         if (brackets[i] === "(" || brackets[i] === "[" || brackets[i] === "{") {
//             stack.push(brackets[i]);
//         } else {
//             if (brackets[i] === ")" && stack.peak() === "(") {
//                 stack.pop();
//             } else if (brackets[i] === "]" && stack.peak() === "[") {
//                 stack.pop();
//             } else if (brackets[i] === "}" && stack.peak() === "{") {
//                 stack.pop();
//             } else {
//                 return "not balanced";
//             }
//         }
//     }
//     if (!stack.peak()) {
//         return "balanced";
//     }
//     return "not balanced"
// }
// function runProgram(input) {
//     input = input.trim().split("\n");
//     let testCases = parseInt(input[0]);
//     for (let t = 0; t < testCases; t++) {
//         console.log(bracketsMatch(input[t + 1]));
//     }
// }
// runProgram(`5
// {([])}
// ()
// ([]
// }
// (})`)

// KVP Question :- how many times an alphabet is repeated count
// function enigma(N, str) {
//     let kvp = {};
//     for (let i = 0; i < N; i++) {
//         if (!kvp[str[i]]) {
//             kvp[str[i]] = 1;
//         } else {
//             kvp[str[i]]++;
//         }
//     }
//     return kvp;
// }

// function runProgram(input) {
//     input = input.trim().split("\n");
//     let N = parseInt(input[0]);
//     let str = input[1].trim();
//     console.log(enigma(N, str));
// }


// runProgram(`4
// sidd`)

// * Given a string determine if it can be converted into a palindrome

// function canBePalindrome(N, str) {
//     let kvp = {};
//     let count = 0;
//     for (let i = 0; i < N; i++) {
//         if (!kvp[str[i]]) {
//             kvp[str[i]] = 1;
//         } else {
//             kvp[str[i]]++;
//         }
//     }
//     for (let key in kvp) {
//         if (kvp[key] % 2 !== 0) {
//             if (count === 0) {
//                 count++;
//             }
//             if (count > 0) {
//                 return "Can't be converted into palindrome";
//             }
//         }
//     }
//     return "Can be converted into palindrome";
// }
// function runProgram(input) {
//     input = input.trim().split("\n").map(Number);
//     let testCases = parseInt(input[0]);
//     let line = 1;
//     for (let t = 0; t < testCases; t++) {
//         let N = parseInt(input[line++]);
//         let str = input[line++];
//         console.log(canBePalindrome(N, str))
//     }
// }

// runProgram(`2
// 6
// aabbc
// 5
// aabcd`)

