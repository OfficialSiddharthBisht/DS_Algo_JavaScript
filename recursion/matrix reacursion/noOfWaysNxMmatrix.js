/*
    Given the n and m , rows and columns of the matrix, and we can move to the right and the bottom ,
     find the number of ways by which we can reach the end.
     
     INPUT 1:
    3 3 
    -> 6 ways
    INPUT 2: 
    2 3 
    -> 4 ways
    INPUT 3: 
    2 2 
    -> 2 ways
    INPUT 4:
    1 3
    -> 1 way
*/

function numberOfWays(n , m){
    if(n === 1 || m === 1){
        return 1;
    }
    return numberOfWays(n - 1,m) + numberOfWays(n,m - 1);
}

console.log(numberOfWays(3,3));
console.log(numberOfWays(2,4));
console.log(numberOfWays(2,2));
console.log(numberOfWays(1,3));