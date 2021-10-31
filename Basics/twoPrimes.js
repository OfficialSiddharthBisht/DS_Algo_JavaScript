/*You are given two numbers, stored in variables with the following namesa, b
If both the numbers are prime, printTrue, else printFalse
*/
function twoPrimes(a,b) {
    //write code here
    if(isPrime(a)&&isPrime(b))
    {
        console.log("True");
    }
    else 
    {
        console.log("False");
    }
}
// by making function we can check any frequency like 3 prime .... N primes etc.
function isPrime (num) {
    for(let i=2;i<num;i++)
    {
        if(num%i===0)
        {
            return false;
        }
    }
    return true;
}
twoPrimes(5,7);