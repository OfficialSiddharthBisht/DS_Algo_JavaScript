/*
You are given an array, stored in a variable with the name array
The size of the array is stored in a variable with the name N
You are also given another number stored in a variable with the name K
Print the output according to the following conditions
1. If the count of odd elements in the array is greater than the value stored in K, print "Nice Array", without quotes
2. Else, print "Bad Array", without quotes
*/
function niceArrayII(N, array, K) {
    //write code here
    let count=0;
    for(let i=0;i<N;i++)
    {
        if(array[i]%2===1)
        {
            count++;
        }
    }
    if(count>K)
    {
        console.log("Nice Array");
    }
    else
    {
        console.log("Bad Array");
    }
  }
  niceArrayII(5,[1,2,3,4,5],8);