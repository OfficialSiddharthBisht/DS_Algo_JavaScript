/* Given a matrix of size n X m , and two types of queries are to be performed on this matrix . The two types of queries are 
q=1 and q=2
?  Input
2       //* test cases
3 3 1   //* row column q=1
1 2 3
4 5 6
7 8 9
3 3 2   //* row column q=2
1 2 3
4 5 6
7 8 9
Output
1 2 3 6 5 4 7 8 9 
3 2 1 4 5 6 9 8 7 
Image Links - 
q=1 https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/multiDimArr/traversalAndQueriesq%3D1.png
q=2 https://github.com/OfficialSiddharthBisht/DS_Algo_JavaScript/blob/master/multiDimArr/traversalAndQueriesq%3D2.png
*/
function matrixTraversalAndQueries(N, M, q, arr){
    //write code here
    let ans="";
    if(q===1)
    {
        for(let i=0;i<N;i++)
        {
            if(i%2===0)
            {
                for(let j=0;j<M;j++)
                {
                    ans+=arr[i][j]+" ";
                }
            }
            else if(i%2===1)
            {
                for(let j=M-1;j>=0;j--)
                {
                    ans+=arr[i][j]+" ";
                }
            }
        }
        console.log(ans);
    }
    else if(q===2)
    {
        let ans="";
        for(let i=0;i<N;i++)
        {
            if(i%2===0)
            {
                for(let j=M-1;j>=0;j--)
                {
                    ans+=arr[i][j]+" ";
                }
            }
            else if(i%2===1)
            {
                for(let j=0;j<M;j++)
                {
                    ans+=arr[i][j]+" ";
                }
            }
        }
        console.log(ans);
    }
  
}
arr1=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
matrixTraversalAndQueries(3,3,1,arr1);
matrixTraversalAndQueries(3,3,2,arr1);