// Given a number , stored in a variable with the name num 
// To print num lines , and on each line print all the numbers form 1 to the value stored in num
function yourFirstNested(num)
{
  var arr=[];
  for(var i=0;i<num;i++)
  {
    var tempArr=[];
    for(var j=0;j<num;j++)
    {
      tempArr.push(j+1);
    }
    arr.push(tempArr);
  }
 // console.log(arr);
for(var i=0;i<arr.length;i++)
{
  var str="";
  for(var j=0;j<arr.length;j++)
  {
    str+=arr[i][j]+" ";
  }
  console.log(str);
}
}

yourFirstNested(5);