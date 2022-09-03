/*
* Find Even Odd Using Binary
Given a number num , to find if the given number is even or odd
*/

function evenOdd(num){
    if((num & 1) === 0){
        return "Even";
    }else if((num & 1) === 1){
        return "Odd";
    }
}


console.log(evenOdd(4));
console.log(evenOdd(7));