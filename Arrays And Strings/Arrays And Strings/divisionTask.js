// I am given a number N. Let say the floor of 32 divided by N is x print as per the following rules
// In case x is 0 print "Too Low"
// In case it is not possible to generate a valid number , print -1
// In all other cases print x
function divisionTask(N)
{
  if(N===0)
  {
    console.log("-1");
  }
  x=Math.floor(32/N);
  if(x===0)
  {
    console.log("Too Low");
  }
  else
  {
    console.log(x);
  }

}
divisionTask(15);