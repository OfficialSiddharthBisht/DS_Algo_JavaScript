/*Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.
Mathematically,
G[i] for an element A[i] is an element A[j] such that
j is maximum possible AND
j < i AND
A[j] < A[i]

Note: Elements for which no smaller element exist, consider next smaller element as -1.
Input Format:

First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

Second line contains N space separated integers denoting the elements of the array.

Constraints:

N <= 100000

Output
Print N space separated integers denoting the array G.

Sample Input 1 

8
39 27 11 4 24 32 32 1
Sample Output 1

-1 -1 -1 -1 4 24 24 -1
For each array element . we need to find the smallest element to the left and nearest to it.
If it is not there print -1
*/
class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
    }
    //methods
    push(element) {
        this.arr[++this.top] = element;
        return this.arr[this.top];
    }
    pop() {
        let poppedElement = this.arr[this.top];
        delete this.arr[this.top--];
        return poppedElement;
    }
    peek() {
        if (this.top === -1) {
            return undefined;
        }
        return this.arr[this.top];
    }
}
function nearestSmallest(N, arr) {
    for (i = 0; i < N; i++) {
        let ans = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[i]) {
                ans = arr[j];
                break;
            }
        }
        stack.push(ans);
    }
    let output = [];
    while (stack.peek()) {
        output.push(stack.pop() + " ");
    }
    //since output will be reversed so reversing it to get the ans
    let left = 0;
    let right = output.length - 1;
    while (left <= right) {
        let temp = output[left];
        output[left] = output[right];
        output[right] = temp;
        left++;
        right--;
    }
    console.log(output.join(" "));
}

let stack = new Stack();
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    nearestSmallest(N, arr);
}

if (process.env.USER === "siddharth") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
