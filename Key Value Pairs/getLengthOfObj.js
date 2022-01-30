/* Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 
};
*/
var student={
    name:"Siddharth",
    class:12,
    rollno:37,
};
var count=0;
for(var i in student)
{
    count++;
}
console.log(count);