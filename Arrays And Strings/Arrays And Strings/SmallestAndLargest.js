// Given an array, A, of N integers, print the smallest and largest element present in the array YOU MUST NOT USE ANY BUILT-IN FUNCTION
function smallestAndLargest(arr)
{
  var smallest=arr[0];
  var largest=arr[0];
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]>largest)
    {
      largest=arr[i];
    }
    if(arr[i]<smallest)
    {
      smallest=arr[i];
    }
  }
  console.log(`Smallest is ${smallest} and largest is ${largest} `);
}
smallestAndLargest([5,6,8,0,-9,7,5,6]);