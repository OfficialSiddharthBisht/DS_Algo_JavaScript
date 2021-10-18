// Given a number stored in a variable with the name n
// To print n lines and on each line print n stars
//eg- n=4
//* * * *
//* * * *
//* * * *
//* * * *
function yourFirstPattern(n)
{
  for(var i=0;i<n;i++)
  {
    var str="";
    for(var j=0;j<n;j++)
    {
      str+="* ";
    }
    console.log(str);
  }
}

yourFirstPattern(4);