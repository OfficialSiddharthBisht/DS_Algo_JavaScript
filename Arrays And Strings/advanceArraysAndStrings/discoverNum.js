function discoverNum(N ,arr , q){
    for(let i = 0; i < N; i++){
        if(arr[i] === q ){
            return "YES";
        }
    }
    return "NO";
}
function runProgram(input){
    input = input.trim().split("\n");
    let [N , Q] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let line = 2;
    for(let i = 0; i < Q; i++){
        let q = parseInt(input[line++]);
        console.log(discoverNum(N ,arr , q));
    }
}


runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`)