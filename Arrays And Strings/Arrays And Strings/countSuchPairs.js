/* Given an array A of N integers along with a target integer K.
Task is to find out the number of pairs of integers present in the array whose sum is equeal to the target value K.
*/
function countSuchPairs(N,K,A)
{
  var count=0;
  for(var i=0;i<N;i++)
  {
    for(var j=0;j<N;j++)
    {
      if(A[i]+A[j]===K)
      {
        count++;
      }
    }
  }
  console.log(count/2);
}

countSuchPairs(5,9,[3,0,6,2,7]);
countSuchPairs(2,4,[2,2]);