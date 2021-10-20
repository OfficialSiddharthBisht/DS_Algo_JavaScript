// Given details of students as strings To make an array of object and store all the details of the students 
var input=`01 Siddharth
02 Priyanka
03 Bhawana
04 Vishank`;
input=input.split("\n");
// console.log(input); 
// [ '01 Siddharth', '02 Priyanka', '03 Bhawana', '04 Vishank' ]
var allStudents=[];
for(var i=0;i<input.length;i++)
{
    var line=input[i];
    var student =createStudent(line);
    allStudents.push(student);
}
console.log(allStudents)
function createStudent(input)
{
    input=input.split(" ");
    var code=input[0];
    var name=input[1];
    return {
        code,
        name,
    }
}