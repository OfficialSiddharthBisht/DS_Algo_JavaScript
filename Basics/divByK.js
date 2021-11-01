// You are given two numbers stored in the variable with the following names,
// num, K
// You have to print all the numbers in the range[1,num], such that for each number, the operationi % K == 0, whereirefers to the numbers present in that range
// Print each number on a new line
function divisibleByK(num,k) {
    //write code here
    for(let i=1;i<num;i++)
    {
        if(i%k===0)
        {
            console.log(i);
        }
    }
}
divisibleByK(7,2)