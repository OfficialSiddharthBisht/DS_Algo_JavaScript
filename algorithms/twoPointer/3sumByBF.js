/*Given an array arr of N integers , are there elements a,b,c in the array such that a+b+c=k
Find all the unique triplets in the array which gives the sum of k. 
Notice that the solution must not contain dublicate triplets 
*/
// ? Time Complexity - O(N*N*N)
function threeSumByBruteforce(N,arr,K)
{
    for(var i=0;i<N;i++)
    {
        for(var j=i+1;j<N;j++)
        {
            for(var k=j+1;k<N;k++)
            {
                if(arr[i]+arr[j]+arr[k]===K)
                {
                    console.log(arr[i]+" "+arr[j]+" "+arr[k]);
                }
            }
        }
    }
}
threeSumByBruteforce(6,[-1,0,1,2,-1,-4],0);
//! problem in bruteforce - solution contain dublicate triplets in jumbled form

// input  arr=[-1,0,1,2,-1,-4]  N=6  K=0
// output [-1,-1,2]  and [-1,0,1]
//!Problem Source LeetCode