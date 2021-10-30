/* Given a square matrix of N X N.Print the Z traversal of the matrix 
?Input       Output
1          1 2 3 5 7 8 9
3
1 2 3
4 5 6
7 8 9
*/
var arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
var N=3;
let ans="";
    if(N===1)
    {
        console.log(arr[0][0]);
        return;
    }
 for(let j=0;j<N;j++)
 {
     ans+=arr[0][j]+" ";
 }
  for(let i=0;i<N-1;i++)
  {
      for(let j=0;j<N-1;j++)
      {
          if((i+j)===N-1)
          {
              ans+=arr[i][j]+" ";
          }
      }
  }
  for(let j=0;j<N;j++)
 {
     ans+=arr[N-1][j]+" ";
 }
 console.log(ans);
