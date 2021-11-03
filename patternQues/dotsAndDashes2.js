/* You are given a number, stored in a variable N
For all numbers in the range of [1,N], including the value stored inN, if the number is even print N_, without space, else if the number is even, print N*, without space, on a new line
For example, consider the value stored inN = 5, therefore, the output required will be
_____
*****
_____
*****
_____
*/
function dotsAndDashesII(N) {
    // Write code here
    for(let i=0;i<N;i++)
    {
        let str1="";
        let str2="";
        if(i%2===0)
        {
            for(let j=0;j<N;j++)
            {
                str1+="_";
            }
            console.log(str1);
        }
        else if(i%2===1)
        {
            for(let k=0;k<N;k++)
            {
                str2+="*";
            }
            console.log(str2);
        }
    }
}
dotsAndDashesII(6);