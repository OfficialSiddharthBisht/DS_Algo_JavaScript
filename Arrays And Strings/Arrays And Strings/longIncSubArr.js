function longestIncSubArr(n, A) 
{
  var ans=0;
  for(var i=0;i<n;i++)
  {
    var count=1;
    for(var j=i+1;j<n;j++)
    {
      if(A[j]>A[j-1])
      {
        count++
      }
      else
      {
        break;
      }
    }
if(ans<count)
{
  ans=count;
}
  }
  console.log(ans);
}

longestIncSubArr(6,[1,2,1,2,3,1]);