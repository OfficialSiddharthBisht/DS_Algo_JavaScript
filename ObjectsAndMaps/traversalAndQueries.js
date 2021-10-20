//! Need ques Description
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
var N = 3;
var M = 3;
var q=2;
var rowIndex = 0;
var str="";
if(q===1)
{
while(rowIndex!==(N))
{
if(rowIndex % 2 === 0) 
{
    for (var j = 0; j < M; j++) 
    {
        str+=arr[rowIndex][j]+" ";
    }
}
else if(rowIndex%2===1)
{
    for(var j=(M-1);j>=0;j--)
    {
        str+=arr[rowIndex][j]+" ";
    }
}
rowIndex++;
}
console.log(str);
}
else if(q===2)
{
    while(rowIndex!==(N))
{
if(rowIndex % 2 === 1) 
{
    for (var j = 0; j < M; j++) 
    {
        str+=arr[rowIndex][j]+" ";
    }
}
else if(rowIndex%2===0)
{
    for(var j=(M-1);j>=0;j--)
    {
        str+=arr[rowIndex][j]+" ";
    }
}
rowIndex++;
}
console.log(str);
}