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

