// Given a string. To sort the string in alphabetical order
let str="zabcjhrk"; //? unsorted string
let alpha="abcdefghijklmnopqrstuvwxyz";
let sortedStr="";
for(let i=0;i<alpha.length;i++)
{
    for(let j=0;j<str.length;j++)
    {
        if(alpha[i]===str[j])
        {
            sortedStr+=alpha[i];
        }
    }
}
console.log(sortedStr);