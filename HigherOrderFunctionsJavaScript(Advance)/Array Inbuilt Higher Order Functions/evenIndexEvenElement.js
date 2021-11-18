/* Given an array of numbers , return the elements that have even index (starting the count 0) and are even (both the element  and the index should be even)
? Use Higher Order Functions
* Input - [2,4,5,3,6,8]
* Output - [2,6]
*/
let arr = [2, 4, 5, 3, 6, 8];
let ans = arr.filter(function (element, index) {
    return element % 2 === 0 && index % 2 === 0;
});
console.log(ans);
