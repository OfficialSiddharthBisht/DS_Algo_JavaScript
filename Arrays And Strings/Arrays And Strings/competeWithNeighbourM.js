/*Provided an array arr of n integers .
To find the count of all such integers in array which are larger than its neighbours.
neighbours of a integer in array are its adjacent integers.  
*/

var arr=[8,0,-2,1,-4];
var n=arr.length;
var count=0;
if(arr[0]>arr[1])
{
  count++;
}
if(arr[n-1]>arr[n-2])
{
  count++;
}
for(var i=1;i<n-1;i++)
{
  if(arr[i]>arr[i+1]&&arr[i]>arr[i-1])
  {
    count++;
  }
}
console.log(count);