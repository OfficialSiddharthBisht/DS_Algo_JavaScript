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
/*
Logic :-
1- All even numbers in binary ends with 0 and when we do & 1 we get the last digit as 0
2- All odd numbers in binary ends with 1  and when we do & 1 we get the last digitt as 1
*/