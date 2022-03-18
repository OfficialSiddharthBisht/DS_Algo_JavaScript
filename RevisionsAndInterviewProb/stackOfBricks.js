function stackOfBricks(N ,x , y , arr1 , arr2){
    let sum = 0;
    arr1 = arr1.sort(function( a , b){
        return a - b;
    });
    arr2 = arr2.sort(function(a, b){
        return a - b;
    });
    for(let i = 0; i < N; i++){
        if(arr1[i] > arr2[i]){
            sum += (arr1[i] - arr2[i]) * y;
            // y cost of removing a brick
        }
        if(arr1[i] < arr2[i]){
            sum += (arr2[i] - arr1[i]) * x;
            // x cost of adding a brick
        }
    }
    console.log(sum);
}


stackOfBricks(3 , 6 , 4 ,[3 , 1, 1],[1 ,2 ,2]);