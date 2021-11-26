/*Minions are of 26 types, from 'a' to 'z'. If two Minions of same type finds themselves besides each other, they will kill each other.

You are given a string of Minions. You need to find the final surviving string of Minions, after all the killings. i.e Further No Minion will kill other Minion.

If no Minion survived a after all the fighting, print "-1".

Input Format

First Line contains 'N', size of strings of Minions.

Second Line contains S, string of Minions.

Constraints

1 <= N <= 10^6

Output Format :
Single line with stable Minion string or "-1"

Sample Input 1 

5
aabbc

Sample Output 1
c

Sample Input 2 
12
abbabaadcbbc

Sample Output 2
bd

Sample Input 3 
2
aa

Sample Output 3
-1

Hint
1st Test case :-
aabbc => bbc => c

2nd Test Case:-
abbabaadcbbc => aabaadcbbc => aabdcbbc => aabdcc =>bdcc=> bd
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
        if (this.top === -1) {
            return null;
        }
        let poppedElement = this.arr[this.top];
        delete this.arr[this.top];
        this.top--;
        return poppedElement;
    }
    peek() {
        if (this.top === -1) {
            return null;
        }
        return this.arr[this.top];
    }
}

function minions(N, str) {
    let ans = "";
    let stack = new Stack();
    for (let i = 0; i < N; i++) {
        //if stack is empty push the element
        if (stack.peek() === null) {
            stack.push(str[i]);
        } else if (stack.peek() === str[i]) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }
    if (stack.peek() === null) {
        console.log(-1);
        return;
    }
    // adding the left elements of the stack to ans variable
    while (stack.peek() !== null) {
        ans += stack.pop();
    }
    ans = ans.trim().split("").reverse();
    console.log(ans.join(""));
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0];
    let str = input[1].trim();
    minions(N, str);
}
if (process.env.USER === "siddharth") {
    runProgram(`2
    aa`);
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
