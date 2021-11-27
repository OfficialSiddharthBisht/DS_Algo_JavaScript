/* New Year Celebration is coming near and DG is hosting a party for it, To make sure the party goes well she wants order in the party.There are two counters one of ice-cream and other for Cold-drinks.

On ice-cream counter the line was formed in form of Queue and on drinks counter the line was formed in order of Stacks.

She gave the management of the party to NV, NV made a plan to ask the manager following types of query.

Query types:

1 X : Number X enter the Queue.

2 X : Number X enter the Stack.

3: Output whoever is in-front of the queue.

4: Output whoever is on-top of the stack

5: Which person is in-front of queue get out of queue and enters the stack.

Note: If the Queue or Stack is empty then output "-1"

Input Format :

The first line of input will contain Q, which is the number queries.

The next Q lines will different queries based upon query types given.

Constraints :

1<=Q<=10^5

1<=X<=10^9

Output Format

Output will consist of integers based upon Query types.If Query type is 3 then Output whoever is in-front of the queue, if Query type is 4 Output whoever is on-top of the stack.

Sample Input 1 

7
1 4
2 3
1 2
3
4
5
4
Sample Output 1

4
3
4
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
        //underflow condition
        if (this.top === -1) {
            return null;
        }
        let poppedElement = this.arr[this.top];
        delete this.arr[this.top];
        this.top--;
        return poppedElement();
    }
    peek() {
        //underflow condition
        if (this.top === -1) {
            return null;
        }
        return this.arr[this.top];
    }
}

class Queue {
    constructor(size) {
        this.arr = [];
        this.maxSize = size;
        this.front = 0;
        this.rear = 0;
    }
    //methods
    // add from rear i.e back
    enqueue(element) {
        //overflow condition
        if (this.rear >= this.maxSize) {
            return null;
        }
        this.arr[this.rear] = element;
        this.rear++;
    }
    //delete from front
    dequeue() {
        // underflow condition
        if (this.front === this.rear) {
            return null;
        }
        let dequeuedElement = this.arr[this.front];
        delete this.arr[this.front];
        this.front++;
        //after removing the element if the queue is empty
        if(this.front===this.rear){
            this.front=0;
            this.rear=0;
        }
        return dequeuedElement;
    }
    getFront() {
        //underflow condition
        if (this.front === this.rear) {
            return null;
        }
        return this.arr[this.front];
    }
}
let stack=new Stack();
let queue= new Queue();
function newYearCelebration(query) {
    //enqueue
    if (query[0] === 1) {
        queue.enqueue(query[1]);
    }
    //push
    if (query[0] === 2) {
        stack.push(query[1]);
    }
    //getFront
    if (query[0] === 3) {
        if(queue.getFront()===null){
            console.log(-1);
        }
        else{
        console.log(queue.getFront());
        }
    } // peek()
    if (query[0] === 4) {
        if(stack.peek()===null){
            console.log(-1);
        }else{
        console.log(stack.peek());
        }
    } //push to stack dequeue from queue
    if (query[0] === 5) {
        if(queue.getFront()===null){
            console.log(-1);
        }
        else
        stack.push(queue.dequeue());
    }
}
function runProgram(input) {
    input = input.trim().split("\n");
    let queries = +input[0];
    let line = 1;
    for (let i = 0; i < queries; i++) {
        let query = input[line++].trim().split(" ").map(Number);
        newYearCelebration(query);
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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
