/*
GCD - Greatest Common Divisor
HCF - Highest Common Factor
Given two numbers find their GCD/ HCF
*/


function gcd(a, b) {
    //base case 
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

console.log(gcd(6, 10));
console.log(gcd(65, 110));


//* gcd (a , b) = gcd(a - b, b)
//* gcd (a , b) = gcd(b, a % b)
