/* Stack Implementation Using Array */

class Stack {
    constructor() {
        this.arr = []
        this.top = -1
    }
    //methods

    push(element) {
        this.top++;
        this.arr[this.top] = element;
    }

    pop() {
        let poppedElement = this.arr[this.top];
        delete this.arr[this.top];
        this.top--;
        console.log(`Popped element is ${poppedElement} .`);
        return this.arr[this.top];
    }
    peak() {
        console.log(this.arr[this.top]);
    }
}

let stack = new Stack();
console.log(stack);
stack.push(50);
stack.push(60);
console.log(stack);
stack.pop()
console.log(stack);
stack.peak();