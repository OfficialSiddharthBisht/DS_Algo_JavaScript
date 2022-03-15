function useSideLane(N ,arr){
    let ans = [];
    let sideLane = [];
    let nextNum = 1;
    for(let i = 0; i < N; i++){
        if(arr[i] !== nextNum){
            sideLane.push(arr[i]);
        }else{
            if(arr[i] === nextNum){
                nextNum++;
                ans.push(arr[i]);
            }
            if(sideLane[sideLane.length - 1] === nextNum){
                ans.push(sideLane[sideLane.length - 1]);
                sideLane.pop();
                nextNum++;
            }
        }
    }
    if(sideLane[sideLane.length - 1] === nextNum){
        ans.push(sideLane[sideLane.length - 1]);
        sideLane.pop();
    }
    console.log("ans " , ans);
    console.log("sidelane ",sideLane);
    if(sideLane.length === 0){
        console.log("yes");
    }else{
        console.log("no");
    }
}

function runProgram (input) {
    input = input.trim().split("\n");
    let line = 0;
    while(true){
        let n = parseInt(input[line]);
        if(n === 0){
            return;
        }
        let arr = input[line + 1].trim().split(" ").map(Number);
        line += 2;
        useSideLane(n ,arr);
    }
}

runProgram(`5 
5 3 2 1 4 
0`)
