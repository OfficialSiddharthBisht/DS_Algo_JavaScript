// Given a number , stored in a variable with the name num
// To find the sum of all even numbers greater than 0, and less than or equal to the value stored in num
function evenSumBelowN(num)
{
  var i=1;
  var sum=0;
  while(i<=num)
  {
    if(i%2===0)
    {
      sum+=i;
    }
    i++;
  }
  console.log(sum);
}

evenSumBelowN(6);