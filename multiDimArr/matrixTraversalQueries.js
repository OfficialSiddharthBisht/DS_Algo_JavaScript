/*Matrix traversal and queries 
Given a matrix of size n x m , and two types of queries are to be performed on this matrix. The two type of queries are
q=1 , for this type of query, the matrix is to be traversed first left to right then right to left then left to right and so onn....
q=2 , for this type of query, the matrix is to be traversed first right to left then left to right then right to left and so onn....
? Input    Output
q=1
1 2 3       1 2 3 6 5 4 7 8 9
4 5 6
7 8 9

q=2         
1 2 3       3 2 1 4 5 6 7 8 9
4 5 6
7 8 9
*/
function traversalAndQueries(N,M,q,arr)
{
    var ans="";
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
                if(i%2===1)
                {
                    ans+=arr[i][j]+" ";
                }
            }
        }
        }
        console.log(ans);
    }
    else if(q===2)
    {
        for(let i=0;i<N;i++)
        {
            if(i%2===1)
            {
            for(let j=0;j<M;j++)
            {
                 ans+=arr[i][j]+" ";
            }
            }
            else if(i%2===0)
            {
            for(let j=M-1;j>=0;j--)
            {
                ans+=arr[i][j]+" ";
            }
        }
        }
        console.log(ans);
    }
}
let arr=[
[31, 60],
[69 ,91],
[99 ,14],
[79 ,21],
[55 ,71],
[90 ,58],
[65 ,6],
]
traversalAndQueries(7,2,2,arr);