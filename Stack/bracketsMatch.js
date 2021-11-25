/*
Your startup is building their own code editor and today you are assigned the work to match the brackets in the code , since if the brackets in the code does not match it gives error . You have to code nearly the same functionality

A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets enclose a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is balanced if the following conditions are met:

It contains no unmatched brackets.

The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

Given a string, you have to comment if it is balanced or not

Input Format

First line of input contains t which is the number of test cases present in the question

Each test case has a string

Constraints

t < 100

length of string < 100

Output Format :
Print "balanced" if the string is balanced, otherwise print "not balanced" in case the string is not balanced

Sample Input 1 

5
{([])}
()
([]
}    
(})
Sample Output 1

balanced
balanced
not balanced
not balanced 
not balanced
*/
class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
    }
    //* methods
    push(element) {
        this.arr[++this.top] = element;
        return this.arr[this.top];
    }
    pop() {
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
function matchBrackets(str) {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "{" || str[i] === "(" || str[i] === "[") {
            stack.push(str[i]);
        } else {
            if (str[i] === ")") {
                if (stack.pop() !== "(") {
                    console.log("not balanced");
                    return;
                }
            } else if (str[i] === "]") {
                if (stack.pop() !== "[") {
                    console.log("not balanced");
                    return;
                }
            } else if (str[i] === "}") {
                if (stack.pop() !== "{") {
                    console.log("not balanced");
                    return;
                }
            }
        }
    }
    if (stack.peek() === null) {
        console.log("balanced");
        return;
    } else {
        console.log("not balanced");
        return;
    }
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let str = input[line++].trim();
        matchBrackets(str);
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`5
    {([])}
    ()
    ([]
    }    
    (})`);
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
