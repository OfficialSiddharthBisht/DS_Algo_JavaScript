/*
* Swap Two Numbers Using Binary
Given two numbers a and b , swap the given two numbers using binary operations
*/

function swap(a , b){
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a , b];
}

console.log(swap(5,7));