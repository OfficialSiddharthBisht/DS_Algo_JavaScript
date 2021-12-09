/*There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.

There are N operations that can be performed on this line. The operations are of following type:

E x : Integer x enters the queue (For such operation, print the new length of the queue.)

D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.

Input Format :

First line consists of a single integer denoting N

Each of the following N lines contain one of the operation as described above.

Constraints :

1<=N<=100

Output Format :-
For each enqueue operation print the new size of the queue.

And for each dequeue operation print two integers, deleted element (-1, if queue is empty) and the new size of the queue.

Sample Input 1 
5
E 2
D
D
E 3
D

Sample Output 1
1
2 0
-1 0
1
3 0
*/
class Queue {
    constructor() {
        this.arr = [];
        this.front = 0; //elements are added here
        this.rear = 0; // elements are removed from here
    }
    //methods
    enqueue(element) {
        this.arr[this.rear] = element;
        this.rear++;
    }
    dequeue() {
        // condition for underflow
        if (this.rear === this.front) {
            return "-1";
        }
        let dequeuedElement = this.arr[this.front];
        delete this.arr[this.front];
        this.front++;
        if (this.rear === this.front) {
            this.rear = 0;
            this.front = 0;
        }
        return dequeuedElement;
    }

    getFront() {
        return this.arr[this.front];
    }
    getLength() {
        return this.rear - this.front;
    }
}
let queue = new Queue();
function runProgram(input) {
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    line = 1;
    for (let i = 0; i < N; i++) {
        let query = input[line++].trim().split(" ");
        buyTicket(query);
    }
}
function buyTicket(query) {
    if (query[0] === "E") {
        queue.enqueue(query[1]);
        console.log(queue.getLength());
    } else if (query[0] === "D") {
        if (queue.getFront) {
            console.log(queue.dequeue() + " " + queue.getLength());
        } else {
            console.log("-1");
        }
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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
