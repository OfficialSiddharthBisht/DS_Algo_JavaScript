/* Given an array of strings print the sum of lengths if the characters in the stirng are odd
Sample Input - ["A","Good","Problem"]
Sample Output- '8'
*/
let arr=["A","Good","Problem"];
let sum=0;
let ans=arr.filter(function(element){
   return  element.length%2===1;
});
let ans2=ans.reduce(function(a,element){
    return (a+element).length;
})
console.log(ans2);