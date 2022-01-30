/*You are given a number stored in a variable with the namenum
Print num lines such that there are numbers from 1 to i, such that on each line you print only one number. Also,irepresents all the numbers from 1 to num
For example, consider the value stored innum = 5
Therefore, the required output will be
1
1 
2
1 
2 
3
1 
2 
3 
4
1 
2 
3 
4
5
*/
function numberPattern2 (num) {
    for(let i=1;i<=num;i++)
    {
        for(let j=1;j<=i;j++)
        {
            console.log(j);
        }
    }
}
numberPattern2(5);