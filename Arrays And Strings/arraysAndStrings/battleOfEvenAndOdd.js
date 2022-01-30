// You are given an array arr of N integers.
// You need to printOdd, if thesum of all odd numbers present in the array is greater than sum of all the even numbers present in the array, or else printEven.
function printOdd(arr)
{
  var oddSum=0;
  var evenSum=0;
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]%2===1)
    {
      oddSum+=arr[i];
    }
    if(arr[i]%2===0)
    {
      evenSum+=arr[i];
    }
  }
  if(evenSum>oddSum)
  {
    console.log("Even");
  }
  else if(oddSum>evenSum)
  {
    console.log("Odd");
  }
}
printOdd([4,5,6,8,9,5,2,4,11]);