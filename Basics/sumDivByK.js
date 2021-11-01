// You are given two numbers stored in the variable with the following names,num, K
// You have to print the sum of all the numbers in the range[1,num], such that for each number, the operationi % K == 0, whereirefers to the numbers present in that range
function divisibleByKII(num,k) {
    //write code here
    let sum=0;
    for(let i=1;i<=num;i++)
    {
        if(i%k===0)
        {
            sum+=i;
        }
    }
    console.log(sum);
}

divisibleByKII(7,2)