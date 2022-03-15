// !Bruteforce Approach :-
function smallerNeighbourElemBruteForce(N , arr){
    let ans = [];
    for(let i = 0; i < N ;i++){
       let temp = -1;
        for(let j = i ; j >= 0; j--){
            if(arr[i] > arr[j]){
                temp = arr[j];
                break;
            }
        }
        ans.push(temp);
    }

    console.log(ans.join(" "));
}
// ! Using Stack
function stackSmallerNeighbourElem(N ,arr){
    let stack = [];
    let ans = [];
    for(let i = 0; i < N ; i++){
        while(stack.length > 0 && stack[stack.length - 1] >= arr[i]){
            stack.pop();
        }
        if(stack.length == 0){
            ans.push(-1);
        }else{
            ans.push(stack[stack.length - 1]);
        }
        stack.push(arr[i]);
    }
    console.log(ans.join(" "));
}
function runProgram (input) {
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);  
    smallerNeighbourElemBruteForce(N ,arr); 
    stackSmallerNeighbourElem(N ,arr);
}

runProgram(`8
39 27 11 4 24 32 32 1`);
//expected output :-
// - 1 -1 -1 -1 4 24 24 -1