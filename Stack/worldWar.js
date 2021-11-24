/* World War
The communication happens in the World War in form of strings, and the strings are organized such that, given a string "S", when fed into a text editor "#" means backspace, on a conventional keyboard. Since, everyday, we are getting more behind in the war, Country asks for your help. Help the Country break the secret communication between  Troops.

Note that after backspacing an empty text, the text will continue empty.

Input Format

The first line of the input contains T, the number of test cases. Each test case consists of a single line, which contains the encrypted string S.

0 <= length of string <= 100
1 <= T <= 200
Sonly contain lowercase letters and'#'characters.

Output
The output for each test case, is the decrypted string, on a new line.


Sample Input 1 

2
ab#d
a#bc

Sample Output 1

ad
bc
*/
class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
    }
    //methods
    push(element) {
        this.arr[++this.top] = element;
    }
    pop() {
        let poppedElement = this.arr[this.top];
        delete this.arr[this.top];
        this.top--;
        return poppedElement;
    }
    peek() {
        return this.arr[this.top];
    }
    isEmpty(){
        if(this.top===-1){
            return true;
        }
        return false;
    }
}
function decode(str){
    let stack = new Stack();
    let ans=[];
    for(let i=0;i<str.length;i++){
        if(str[i]!=="#"){
            stack.push(str[i]);
        }
        else{
            stack.pop();
        }
    }
    while(stack.peek()){
        ans.push(stack.peek());
        stack.pop();
    }
    //reversing the order 
    ans.reverse();
    console.log(ans.join(""));
}

function runProgram(input) {
    input=input.trim().split("\n");
    let testCases=+input[0];
    let line=1;
    for(let i=0;i<testCases;i++){
        let str=input[line++].trim();
        decode(str);
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`2
    ab#d
    a#bc`);
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
