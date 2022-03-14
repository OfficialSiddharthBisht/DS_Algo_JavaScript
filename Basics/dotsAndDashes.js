/*You are given a number stored in a variable with the name N

Print the required pattern, such that for all numbers in the range[1, N], including N, if the number is odd, print a single _ , else print N * without space, on a new line

For example, consider the value stored in N = 5. Therefore, the required output is

_
*****
_
*****
_
*/

function dotsAndDashes(N) {
    // Write code here
     let dots="";
        for(let j=0;j<N;j++)
        {
            dots+="*";
        }
    for(let i=0;i<N;i++)
    {
        if(i%2===0)
        {
            console.log("_");
        }
        else 
        {
           console.log(dots);
        }
    }
}
dotsAndDashes(8);