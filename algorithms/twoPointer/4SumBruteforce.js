/* 
! Previously Came In The Interview Of Google And Amazon
Given an array arr of N integers and an integer target , are there elements A,B,C and D in arr such that A+B+C+D=target ? Find all the quadruplets in the array which gives the sum of target .
*/
//? Bruteforce 
function fourSum(arr,target)
{
    var N=arr.length;
    for(var i=0;i<N;i++)
    {
        for(var j=i+1;j<N;j++)
        {
            for(var k=j+1;k<N;k++)
            {
                for(var l=k+1;l<N;l++)
                {
                    if(arr[i]+arr[j]+arr[k]+arr[l]===target)
                    {
                        console.log(arr[i]+" "+arr[j]+" "+arr[k]+" "+arr[l]);
                    }
                }
            }
        }
    }
}

fourSum([1,2,3,4,5,2,6,7,8,9,2,5],8);