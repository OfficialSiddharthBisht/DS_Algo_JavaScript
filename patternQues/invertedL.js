// You are given a number stored in a variable with the name,N
// Print the pattern as shown below, according to the value stored in N
// For example, consider the value stored in N = 5
// Then, the required output will be, which represents an inverted L
// * * * * *
// *
// *
// *
// *
function invertedL(N) {
    // Write code here
    for(let i=0;i<N;i++)
    {
        var pattern="";
       for(let j=0;j<N;j++)
       {
           if(i===0||j===0)
           {
               pattern+="* ";
           }
       }
       console.log(pattern);
    }
}
invertedL(5);
