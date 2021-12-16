function rotateBy180(N, matrix){
    //write code here
    
for(var i=N-1;i>=0;i--)
{
    var str="";
  for(var j=N-1;j>=0;j--)
  {
    str+=matrix[i][j]+" ";
  }
  console.log(str);
}
  
}
rotateBy180(3,[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]);
