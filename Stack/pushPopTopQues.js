/*  A stack of integers which is currently empty. You are given an integer n and there are n operations that you need to perform on the stack.

The next n line contains one of the following 3 operations:

1 x : Push x to the top of the stack.

2 : Pop an element from the top of the stack. If the stack is empty, do nothing.

3 : Print the top element of the stack (if stack is empty, print "Empty!" (without quotes)).

For better understanding, read sample test case explanation

Input Format:

First line of test case contains n.

In the next n lines there can be one of the following three possible inputs:

1 separated by an integer: In that case, you have to push that integer to stack

2 : Pop an element from the top of the stack. If the stack is empty, do nothing.

3 : Print the top element of the stack (see Output Format).

Constraints :

N<1000


Output
Whenever the query (out of the n queries) is 3, print top element of stack.


Sample Input 1 

6
1 15
1 20
2
3
2
3
Sample Output 1

15
Empty!
Hint

Sample Test Case Explanation :

There are 6 different operations to be performed on the stack.

In first operation, we are pushing 15 to the stack

In second operation, we are pushing 20 to the stack

In third operation, we are popping (removing) 20 from the stack.

In fourth operation, we have to print the top element and since stack is not empty and has 15 at the top. Print 15.

In fifth operation, we are popping the top element from the stack and since there is just one element present in the stack, the stack will become empty after performing this operation.

In the sixth operation, you have to print the top element and since the stak is already empty ,output "Empty!"
*/
class Stack{
    constructor(){
        this.arr=[];
        this.top=-1;
    }
    //methods
    push(item){
        this.top++;
        this.arr[this.top]=item;
        return this.arr[this.top]
    }
    pop(){
        if(this.top===-1){
            return undefined;
        }
        delete this.arr[this.top];
        this.top--;
        return this.arr[this.top];
    }
    peek(){
        if(this.top===-1){
            console.log("Empty!");
            return;
        }
        console.log(this.arr[this.top]);
    }
}
var stack= new Stack();
function runProgram(input) {
    input=input.trim().split("\n");
    let N=+input[0];
    let line=1;
    for(let i=0;i<N;i++){
        var element=input[line++].trim().split(" ").map(Number);
        if(element[0]===1){
            stack.push(element[1]);
        }
        else if(element[0]===2){
            stack.pop();
        }
        else if(element[0]===3){
            stack.peek();
        }
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`6
    1 15
    1 20
    2
    2
    3
    2
    3`);
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
