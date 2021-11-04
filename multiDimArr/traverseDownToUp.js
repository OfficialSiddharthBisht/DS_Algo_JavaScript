/*You are given a 2D array(matrix), of N rows and M columns.
-------------
Input
4 3
1 8 9
2 7 10
3 6 11
4 5 12
-------------
Output
4 3 2 1 5 6 7 8 12 11 10 9
note - the image of the question is - https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/multiDimArr/traverseDownToUp.png
*/
function traverseDownToUp(N, M, matrix){
    //write code here
    let str="";
    for(let j=0;j<M;j++)
    {
        for(let i=N-1;i>=0;i--)
        {
            str+=matrix[i][j]+" ";
        }
    }
  console.log(str);
}
let arr=[
    [1,8,9],
    [2,7,10],
    [3,6,11],
    [4,5,12]
]
traverseDownToUp(4,3,arr);
