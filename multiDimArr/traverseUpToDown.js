/* You are given a 2D array(matrix), of N rows and M columns.
--------
Input
4 3
1 8 9
2 7 10
3 6 11
4 5 12
--------
Output
9 10 11 12 8 7 6 5 1 2 3 4
link of question image - https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/multiDimArr/traverseUpToDown.png
*/
function traverseUpToDown(N, M, matrix){
    //write code here
    let str="";
    for(let j=M-1;j>=0;j--)
    {
        for(let i=0;i<N;i++)
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
traverseUpToDown(4,3,arr);