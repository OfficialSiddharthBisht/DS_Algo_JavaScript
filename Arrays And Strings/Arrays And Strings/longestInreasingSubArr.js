/* Given an array arr of n integers .
We need to find out the length of the longest subarray which is strictly increasing ie every element is greater than it's previous element in that subarray
*/
function longestIncSubArr(n,arr)
{
  //making the subarray
  var tempArr=[];
  var subArr=[];
  for(var i=0;i<n;i++)
  {
    for(var j=i;j<n;j++)
    {
      for(var k=i;k<=j;k++)
      {
        tempArr.push(arr[k]);
      }
      subArr.push(tempArr);
      tempArr=[];
    }
  }
  console.log(subArr);
  var len=0;
  var isStrictlyIncreasing=true;
  //looping through the subArray and finding the length of the longest subarray which is strictly increasing
  for(var i=0;i<subArr.length;i++)
  {
    var count=1;
    var array=subArr[i];
    for(var j=0;j<array.length-1;j++)
    {
      if(array[j]>arr[j+1])
      {
        isStrictlyIncreasing=false;
        break;
      }
      else
      {
        count++;
      }
    }
    if(isStrictlyIncreasing)
    {
      if(count===array.length)
      {
      len=array.length;
      }
    }
  }
  console.log(len);
}

longestIncSubArr(6,[1,2,1,2,3,1]);