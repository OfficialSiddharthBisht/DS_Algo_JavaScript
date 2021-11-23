/*Coder's Restaurant 
You love food. Hence, you took up position of a manager at Masai restaurant that serves people with delicious food packages. It is a very famous place and people are always queuing up to have one of those packages. Each package has a cost associated with it. The packages are kept as a pile. The job of a manager is very difficult. You need to handle two types of queries:

1) Customer Query:

When a customer demands a package, the food package on the top of the pile is given and the customer is charged according to the cost of the package. This reduces the height of the pile by 1.

In case the pile is empty, the customer goes away empty-handed.

2) Chef Query:

The chef prepares a food package and adds it on top of the pile. And reports the cost of the package to the Manager.

Help him manage the process.

Input Format:

First line contains an integer Q, the number of queries. Next Q lines follow.

A Type-1 ( Customer) Query, is indicated by a single integer 1 in the line.

A Type-2 ( Chef) Query, is indicated by two space separated integers 2 and C (cost of the package prepared) .

Constraints :

Q<100

C<1000

Output
For each Type-1 Query, output the price that customer has to pay i.e. cost of the package given to the customer in a new line. If the pile is empty, print "No Food" (without quotes).

Sample Input 1 

6
1
2 5
2 7
2 9
1
1

Sample Output 1

No Food
9
7
*/
class Stack{
    constructor(){
        this.arr=[];
        this.top=-1;
    }
    //methods
    push(element){
        this.top++;
        this.arr[this.top]=element;
    }
    pop(){
        if(this.top===-1){
            return "No Food";
            return;
        }
        let poppedArray=this.arr[this.top];
        delete this.arr[this.top];
        this.top--;
        return poppedArray;
    }
    peak(){
        if(this.top===-1){
            return undefined;
        }
        return this.arr[this.top];
    }
}
let stack=new Stack();
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let queries=+input[0];
    let line=1;
    for(let i=0;i<queries;i++){
        let query=input[line++].trim().split(" ").map(Number);
        codersResturent(query);
    }
  }
  function codersResturent(query){
      if(query[0]===1){
          console.log(stack.pop());
      }
      else if(query[0]===2){
          // push query[1]
          stack.push(query[1]);
      }
  }
  if (process.env.USER === "siddharth") {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`);
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