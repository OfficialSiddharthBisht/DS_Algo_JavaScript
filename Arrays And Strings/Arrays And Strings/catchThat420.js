/* Given an integer n. Task is to find if the string 420 is present in it or not.
If 420 is present Print "Caught" or Print "Escaped".
*/
// catch that 420
var str="556633";
var is420=false;
var subStr="";
var arr=[];
for(var i=0;i<str.length;i++)
{
  for(var j=i;j<str.length;j++)
  {
    for(var k=i;k<=j;k++)
    {
      subStr+=str[k];
    }
    arr.push(subStr);
    subStr="";
  }
}
for(var i=0;i<arr.length;i++)
{
  if(arr[i]==='420')
  {
    is420=true;
    break;
  }
}
if(is420)
{
  console.log("Caught");
}
else
{
  console.log("Escaped");
}
console.log(arr);
