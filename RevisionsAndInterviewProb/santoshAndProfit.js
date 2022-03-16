function numOfWays(N , curr = 0){
    if(curr === N){
        return 1;
    }
    if(curr > N){
        return 0;
    }
    
    return numOfWays(N ,curr + 4) + numOfWays(N ,curr + 8) ; 
}

console.log(numOfWays(12 , 0));