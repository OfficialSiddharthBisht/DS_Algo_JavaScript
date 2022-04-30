function searchLessMore(N ,arr,opt , x){
    if(opt === 0){
        let count = 0;
        for(let i = 0;i < N; i++){
            if(arr[i] >= x){
                count ++;
            }
        }
        return count;
    }else if(opt === 1){
        let count = 0;
        for(let i = 0; i < N; i++){
            if(arr[i] > x){
                count++;
            }
        }
        return count;
    }
}

function runProgram(input){
    input = input.trim().split("\n");
    let  N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let Q = parseInt(input[2]);
    let line = 3;
    for(let i = 0; i < Q; i++){
        let [option , q] = input[line++].trim().split(" ").map(Number);
        console.log(searchLessMore(N ,arr , option , q));
    }
}


runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`)