/*Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 
};
//?Sample Output: name,sclass,rollno
*/
function listPropOfObject()
{
    var student={
        name:"Siddharth",
        classs:9,
        rollNo:37,
    };
    for( var i in student)
    {
        console.log(student[i]);
    }
}
listPropOfObject();