/* Given a string of lowercase characters in range ascii[‘a’..’z’].

You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

For instance, the string aab could be shortened to b in one operation.

Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

I know there exists a simple implemented Stringentation based solution of this question, but please try to come up with an approach that uses stack data structure to solve the purpose

Input Format

First and the only line contains string

Constraints

Length of string < 1000

Output Format

If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

Sample Input 1 

aaabccddd
Sample Output 1

abd
Hint

Sample 1 Explanation

You can perform the following sequence of operations to get the final string:
*/
class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
    }
    //methods
    push(element) {
        this.top++;
        this.arr[this.top] = element;
        return this.arr[this.top];
    }

    pop() {
        let poppedElement = this.arr[this.top];
        delete this.arr[this.top];
        this.top--;
        return poppedElement;
    }
    isEmpty() {
        if (this.top == -1) {
            return true;
        }
        return false;
    }
    peek() {
        return this.arr[this.top];
    }
}
let stack = new Stack();
function runProgram(str) {
    // reverse loop so that answer comes reverse
    for (let i = str.length - 1; i >= 0; i--) {
        if (stack.isEmpty()) {
            stack.push(str[i]);
        } else if (stack.peek() !== str[i]) {
            stack.push(str[i]);
        } else if (stack.peek() === str[i]) {
            stack.pop();
        }
    }
    // printing the stack elements in the form of string
    let ans = "";
    while (stack.isEmpty() == false) {
        ans += stack.pop();
    }
    if(ans===""){
        console.log("Empty String");
        return;
    }
    console.log(ans);
}
if (process.env.USER === "siddharth") {
    runProgram(`aaabccddd`);
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
