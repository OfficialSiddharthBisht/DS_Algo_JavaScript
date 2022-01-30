// You are given an array which has integer elements. Write a program to print the ceil average of elements (numbers) present in the array.
function ceilAverage(arr)
{
  var sum=0;
  var average=1;
  var N=arr.length;
  for(var i=0;i<N;i++)
  {
    sum+=arr[i];
  }
  average=Math.ceil(sum/N);
  return average;
}

console.log(ceilAverage([10,10,10,10,50]));
