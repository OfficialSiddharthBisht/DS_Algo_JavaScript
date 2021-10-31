/*You are given a number stored in a variable with the name,nums
You have to find the value of the number raised to the power of X
For example, if the value stored in num = 3 and X=4 . Therefore, the value of 3 raised to the power of 4, equals3 * 3 * 3 * 3 = 81, which is the required answer
Therefore, the output is 81 */
function powerOf4(num,X) 
{
    // Write code here
    var product=1;
    for(let i=1;i<=X;i++)
    {
        product*=num;
    }
    console.log(product);
}

powerOf4(3,4);
