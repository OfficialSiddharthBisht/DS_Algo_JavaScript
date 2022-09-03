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

/*
5 ->  101
7 ->  111
a = a ^ b;
    101
   ^111
    ----
    010 = 2 therefore a = 2
    xor => if both values are different then 1 else 0

    b = a ^ b
    010
   ^111
   -----
    101 = 5 therefore b = 5
    
    a = a ^ b
    010
   ^101
    ----
    111 = 7 therefore a = 7
    hence a = 7 and b = 5 swap done
*/