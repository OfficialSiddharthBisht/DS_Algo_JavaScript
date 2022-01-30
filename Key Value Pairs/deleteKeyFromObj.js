/* Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
Sample object:
var student = 
{
name : "David Rayy",
sclass : "VI",
rollno : 12,
};
*/
var student={
    name:"Siddharth",
    class:12,
    rollno:37,
};
console.log("Before deleting ");
for(i in student)
{
    console.log(i+" - "+student[i]);
}
delete student.rollno;
console.log("\n After deleting ");
for(i in student)
{
    console.log(i+" - "+student[i]);
}
