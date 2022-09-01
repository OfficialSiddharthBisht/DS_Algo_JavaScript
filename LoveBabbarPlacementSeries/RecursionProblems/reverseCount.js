function reverseCount (N) {
    // base case
    if(N === 0){
        return N;
    }
    console.log(N);
    reverseCount(N -1);
}

reverseCount(5);