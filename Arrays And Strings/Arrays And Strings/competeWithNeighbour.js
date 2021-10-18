/*You are provided an array arr which has n integers.
You need to find the count of all such integers in array which are larger than its neighbours.
Neighbours of a integer in array are its adjacent integers. 
*/
function runProgram(arr)
{
  var count=0;
  if(arr[0]>arr[1])
  {
    count++;
  }
  if(arr[arr.length-1]>arr[arr.length-2])
  {
    count++;
  }
  for(var i=1;i<arr.length-1;i++)
  {
    if(arr[i]>arr[i-1]&&arr[i]>arr[i+1])
    {
      count++;
    }
  }
  console.log(count);
}
runProgram([4,2,3,4,2,1,6,5,8]);