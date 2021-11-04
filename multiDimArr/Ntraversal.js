/* N traversal
You are given a matrix of size n x n. Find theNtraversal of the matrix.
?Input          Output
1               7 4 1 5 9 6 3 
3
1 2 3
4 5 6
7 8 9
*/
function nTraversal(matrix) {
  let N=matrix.length;
  let ans="";
  // first column
  for(let i=N-1;i>=0;i--)
  {
    ans+=matrix[i][0]+" ";
  }
  //diagonal
  for(let i=1;i<N-1;i++)
  {
      for(let j=1;j<N-1;j++)
      {
          if(i===j)
          {
              ans+=matrix[i][j]+" ";
          }
      }
  }
  // last column
  for(let i=N-1;i>=0;i--)
  {
    ans+=matrix[i][N-1]+" ";
  }
  console.log(ans);
}
let arr=[
    [1,2,3,4],
    [5,5,6,7],
    [7,8,9,0],
    [0,2,3,4]
]
nTraversal(arr);
