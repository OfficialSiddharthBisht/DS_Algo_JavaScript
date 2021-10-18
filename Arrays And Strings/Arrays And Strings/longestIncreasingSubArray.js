/* Given an array arr of n integers 
I need to find out the length of the longest subarray which is strictly increasing i.e every element is greater than it's previous element in that subarray
*/
function longestIncreasingSubArray(arr)
{
  var subArrelement=[];
  var subArr=[];
  for(var i=0;i<arr.length;i++)
  {
    for(var j=i;j<arr.length;j++)
    {
      for(var k=i;k<=j;k++)
      {
        subArrelement.push(arr[k]);
      }
      subArr.push(subArrelement);
      subArrelement=[];
    }
  }
  console.log(subArr);
  var count=0;
  var prevCount=0;
  var ans=0;
  for(var i=0;i<subArr.length;i++)
  {
    var element=subArr[i];
    for(var j=0;j<element.length;j++)
    {
      if(element[j]<element[j+1])
      {
        count++;
      }
      if(prevCount<count)
      {
        ans++;
      }
    }
  }
  console.log(ans);
}
longestIncreasingSubArray([1,2,1,2,3,1]);