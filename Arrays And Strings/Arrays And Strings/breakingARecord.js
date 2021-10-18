// Given two numbers X and Y. Print "Broken" if Y is greater than X. If X is greater than Y print "Not Yet". Else print "Wao" for all other cases.
function breakRecord(X,Y)
{
  if(Y>X)
  {
    console.log("Broken");
  }
  else if(X>Y)
  {
    console.log("Not Yet");
  }
  else
  {
    console.log("Wao")
  }
}
breakRecord(50,60);
breakRecord(60,50);
breakRecord(50,50);