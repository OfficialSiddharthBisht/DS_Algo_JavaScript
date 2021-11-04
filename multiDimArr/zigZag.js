/* Given amatrixwithNrows andMcolumns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern
-------------
Sample Input
5 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5
------------
Sample Output
7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8
Question Image - https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/multiDimArr/zigZag.png
*/
function goInZigZag(N, M, matrix) {
  //write code here
  let str = "";
  for (let i = 0; i < N; i++) {
    // if i is even the array is going in reverse order
    if (i % 2 === 0) {
      for (let j = M - 1; j >= 0; j--) {
        str += matrix[i][j] + " ";
      }
    }
    //if i is odd the array is going in forward order
    else if (i % 2 === 1) {
      for (let k = 0; k < M; k++) {
        str += matrix[i][k] + " ";
      }
    }
  }
  console.log(str);
}
arr=[
    [4,7,1,1,7],
    [8,9,9,6,1],
    [6,4,9,5,1],
    [7,7,4,7,7],
    [8,6,2,5,5]
]
goInZigZag(5,5,arr);
