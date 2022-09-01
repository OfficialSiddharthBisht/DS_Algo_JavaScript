// Given a number N find and output its value in word form
/*
I/P: - 243
O/p: - Two Four Three
*/
let digitArr = ["zero", "one", "two" , "three" , "four" , "five", "six", "seven" , "eight" , "nine"];
function sayDigits (N , arr) {
    if(N === 0){
        return arr;
    }
    arr.push(digitArr[N % 10]);
    return sayDigits(Math.floor(N / 10) ,arr);
}

let ans = (sayDigits(1042001 , []));
for(let i = ans.length - 1; i >= 0; i--){
    console.log(ans[i]);
}