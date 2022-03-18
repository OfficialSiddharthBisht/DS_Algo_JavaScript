function numOfWays(N , temp){
    // Base Case
    if(temp === N){
        return 1;
    }
    if(temp > N){
        return 0;
    }
    return (numOfWays(N , temp + 1) + numOfWays(N ,temp + 2) + numOfWays(N , temp +3));
}
console.log(numOfWays(3 , 0));
console.log(numOfWays(4 , 0));