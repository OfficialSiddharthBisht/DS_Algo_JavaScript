/*
* Two Sum III – Data structure design
Design and implement a TwoSum class. It should support the following operations: add
and find.
add(input) – Add the number input to an internal data structure.
find(value) – Find if there exists any pair of numbers which sum is equal to the value.
For example,
add(1); add(3); add(5); find(4)  true; find(7)  false
*/

class TwoSum{
    constructor(){
        this.arr = [];
        this.index = -1;
    }
    // methods
    add(input){
        this.index++;
        this.arr[this.index] = input;
    }
    find(target){
        // any of the algorithm can be implemented here from q1 and if the array is sorted any algorithm from q2
        for(let i = 0; i < this.arr.length;i++){
            for(let j = i + 1; j < this.arr.length;j++){
                if(this.arr[i] + this.arr[j] === target){
                    console.log(true);
                    return;
                }
            }
        }
        console.log(false);
        return;
    }
}

let value = new TwoSum();
value.add(5);
value.add(6);
value.find(11);