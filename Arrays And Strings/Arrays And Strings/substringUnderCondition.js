//! Given a string - To Generate All Substring (BruteForce Approach)
var str="abcab";
var substr=[];
var temp="";
var count=0;
for(var i=0;i<str.length;i++)
{
  for(var j=i;j<str.length;j++)
  {
    for(var k=i;k<=j;k++)
    {
      temp+=str[k];
    }
    substr.push(temp);
    temp="";
  }
}
console.log(substr);
