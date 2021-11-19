/* Create Your Own custom array data structure- UltimateArray - which should have the following methods :

push(value) - should add and element from that array and return that element.

pop() - should remove the last element from that array and return that element.
- if we call pop() on an empty array, it should return undefined.

top()- should return the last element in the array.
- if we call top() on an empty array, it should return undefined 

isEmpty() - should return true if the array is empty and vice versa.

shift()- remove an item from the beginning of an array
- if we call shift() on an empty array , it should return undefined

unshift() - add item to the beginning of an array 

indexOf() - finds the index of an element in the array 
- if element is present multiple times then it should return the first index at which the element is present

toString() - convert the entire array element to 1 single string

join() - same as to string but it can specify the seperator in the string between two array elements

splice() - to add new items to an array and sometimes removing elements from the array 

max() - to find the maximum value in the array

min() - to find the minimum value  in the array

sort() - to sort the array

? Higher Order Functions
Write your own HOF(High Order Function) such as :
-forEach()

-map()

-filter()

-reduce()

Note :- Don't use inbuilt functions like push and pop. Write your own logic.
Reference to know how all these methods work -https://www.w3schools.com/js/js_array_methods.asp
To understand how to use higher order functions - #Namaste_JavaScript  -- https://www.youtube.com/watch?v=HkWxvB1RJq0

*/

class UltimateArray {
    constructor() {
        this.arr = [];
        this.length = 0;
    }
    //methods
    push(value) {
        this.arr[this.length] = value;
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        } else {
            delete this.arr[this.length - 1];
            this.length--;
        }
    }

    top() {
        if (this.length === 0) {
            return undefined;
        } else {
            return this.arr[this.length-1];
        }
    }

    isEmpty(){
        return this.length===0;
    }
}

let arr = new UltimateArray();
arr.push(50);
console.log(arr);
arr.pop();
console.log(arr);
arr.push(500)
console.log(arr.top());
console.log(arr.isEmpty());