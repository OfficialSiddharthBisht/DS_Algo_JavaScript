function twoPowN(N){
    // base case
    if(N === 0){
        return 1;
    }
    return 2 * twoPowN(N - 1);
}

console.log(twoPowN(4));

// Recursive Relation :- F(n) = 2 * F(n - 1);