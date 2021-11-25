/*Side Lane 
There are N trucks numbered from 1 to N. The trucks are coming on a road in a random manner.(by random, it means that any order of number: not sorted) There is a side lane which can be used to order the sequence of truck properly(1,2,3,..N)

If it is possible to achieve using the side land, print "yes"

else print "no"
Link 0 - original lane - https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/Stack/sideLane/0.png

1- https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/Stack/sideLane/1.png

2- https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/Stack/sideLane/2.png

3 - https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/Stack/sideLane/3.png

4- https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/Stack/sideLane/4.png

5 -https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/Stack/sideLane/5.png

Note :The side street is so narrow that no two trucks can pass each other. Thus, the truck that enters the side street last must necessarily leave the side street first. Because the trucks  move up closely, a truck cannot drive back and re-enter the side street or the approach street.

Input Format :

There are several test cases.

The first line of each test case contains a single number n, the number of trucks.

The second line contains the numbers 1 to n in an arbitrary order.

All the numbers are separated by single spaces. These numbers indicate the order in which the trucks arrive in the approach street.

Input ends with number 0

Constraints :

N < 1000


Output Format :
For each test case your program has to output a line containing a single word "yes" if the trucks can be re-ordered with the help of the side lane, and a single word "no" in case it is not possible.

Sample Input 1 

5
5 1 2 4 3 
0

Sample Output 1

yes

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
}
function sideLane(N, arr) {
    let stack = new Stack();
    let trucks = 1;
    let finalLane = [];
    for (let i = 0; i < N; i++) {
        if (arr[i] == trucks) {
            finalLane.push(arr[i]);
            trucks++;
            while (stack.peek() == trucks) {
                finalLane.push(stack.pop());
                trucks++;
            }
        } else {
            stack.push(arr[i]);
        }
    }
    if (finalLane.length === arr.length && stack.peek() === undefined) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
function runProgram(input) {
    input = input.trim().split("\n");
    let line = 0;
    while (input[line] != 0) {
        let N = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        sideLane(N, arr);
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`5
    5 1 2 4 3 
    0`);
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
