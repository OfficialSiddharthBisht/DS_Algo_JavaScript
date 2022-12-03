/* //? Segeration of Odd & Even
You are given an array,of size N
You have to divide the array into two parts, even and odd, such that all the even elements in the array are present in the even, while all the odd 
parts in the array are present in the odd part 
You are the given another integer q, which has a value of either 1 or 2
If the value of q==1, print all the even elements in the array followed by the odd elements in the array, otherwise print all the odd elements in 
the array followed by all the even elements in the array
! note -  the relative order of odd and even elements among theselves should be the smae as in the original array
*/
var arr = [1, 2, 3, 4, 5];
var N = arr.length;
var q = 2;
var evenArray = [];
var oddArray = [];
var array;
for (var i = 0; i < N; i++) {
    if (arr[i] % 2 === 0) {
        evenArray.push(arr[i]);
    }
    else {
        oddArray.push(arr[i]);
    }
}
if (q === 1) {
    array = evenArray.concat(oddArray);
}
else if (q === 2) {
    array = oddArray.concat(evenArray);
}
console.log(array);