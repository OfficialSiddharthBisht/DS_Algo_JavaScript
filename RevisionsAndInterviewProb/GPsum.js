function GPsum(N, r, curr) {
    // Base Case
    if (curr > N) {
        return 0;
    }
    return (1 / Math.pow(r, curr) + GPsum(N, r, curr + 1));
}

console.log(Number(GPsum(5, 2, 0)).toFixed(4));