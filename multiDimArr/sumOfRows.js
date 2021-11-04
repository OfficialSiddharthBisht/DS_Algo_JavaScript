/* 
You are given a 2D array, whose dimensions are stored in two variables with the nameNandM
The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

The 2D array is stored in a variable with the namearr

You have to print the sum of all elements in a row, on a new line

For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

3 (Adding the elements of the row [1,2])
7 (Adding the elements of the row [3,4])
11(Adding the elements of the row [5,6])
-------------------------------------------------------
Input
3 2
1 2 
3 4
5 6
-------------------------------------------------------
Output
3
7
11
*/
function sumOfRows(N,M,arr){
    //write code here
    for(let i=0;i<N;i++)
    {
        let sum=0;
        for(let j=0;j<M;j++)
        {
            sum+=arr[i][j];
        }
        console.log(sum);
    }
}

sumOfRows(3,2,[
    [1,2],
    [3,4],
    [5,6]
])
