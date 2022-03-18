class Queue {
    constructor (size){
        this.arr= new Array(size);
        this.maxSize = size;
        this.front = 0;
        this.rear = 0;
    }
    enqueue(element){
        if(this.rear === this.maxSize){
            return null // overflow
        }
        this.arr[this.rear] = element;
        this.rear++;
    }

    dequeue(){
        if(this.front === this.rear){
            return null;
        }
        let dequeuedElement = this.arr[this.front];
        delete this.arr[this.front];
        this.front++;
        //
        if(this.front === this.rear){
            this.front = 0;
            this.rear = 0;
        }
        return dequeuedElement;
    }
    getFront(){
        if(this.front === this.rear){
            return null;
        }
        return this.arr[this.front];
    }
}

