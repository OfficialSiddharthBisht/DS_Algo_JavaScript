class Queue{
    constructor(size){
        this.arr= new Array(size);
        this.maxSize=size;
        this.front=0;
        this.rear=0;
    }
    //methods
    // enqueue - adding an element to the queue
    enqueue(element){
        // condition of overflow
        if(this.rear===this.maxSize){
            return null;
        }
        // element in a queue is added from the rear i.e back
        this.arr[this.rear]=element;
        this.rear++;
    }

    //dequeue
    dequeue(){
        // condition for underflow
        if(this.front===this.rear){
            return null;
        }
        let dequeuedElement= this.arr[this.front];
        // element is deleted from the front
        delete this.arr[this.front]; //optional to delete
        this.front++;
        // after removing the element if the queue is empty then
        if(this.front===this.rear){
            this.front=0;
            this.rear=0;
        }
        return dequeuedElement;
    }

    getFront(){
        //condition for underflow
        if(this.front===this.rear){
            return null;
        }
        return this.arr[this.front];
    }
}

let queue= new Queue(2);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log(queue);