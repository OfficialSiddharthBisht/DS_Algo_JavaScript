/* Given an array of strings generate an array with their first characters
Sample Input - ["Masai","School"]
Sample Output - ["M","S"]
*/
let arr=["Siddharth","Bisht"];
let newArr=arr.map(function(element){
    return element[0];
})
console.log(newArr);