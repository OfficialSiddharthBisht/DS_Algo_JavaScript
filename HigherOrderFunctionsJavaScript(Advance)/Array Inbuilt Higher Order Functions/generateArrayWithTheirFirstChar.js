/* Given an array of strings generate an array with their first characters
Sample Input - ["Siddharth","Bisht"]
Sample Output - ["S","B"]
*/
let arr=["Siddharth","Bisht"];
let newArr=arr.map(function(element){
    return element[0];
})
console.log(newArr);
