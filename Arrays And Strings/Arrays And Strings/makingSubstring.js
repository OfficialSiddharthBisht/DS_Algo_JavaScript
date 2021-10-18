//Given a string 
// To print all the possible substring
//Given a string 
// To print all the possible substring
var str="Sid";
var substr=[];
var temp="";
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