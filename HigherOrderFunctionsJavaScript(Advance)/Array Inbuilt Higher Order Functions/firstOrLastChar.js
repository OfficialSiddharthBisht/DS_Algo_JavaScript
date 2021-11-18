/* Given an array of string generate an array with their first or last character is 'a'
* Sample Input ["assignment","problem","media","upload"]
*Sample Output ["assignment","media"]
*/
let arr=["assignment","problem","media","upload"];
let A=arr.filter(function(element){
    return (element[0]==="a"||element[element.length-1]==="a");
});
console.log(A);
