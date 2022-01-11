/*
You are very good at playing chess since childhood and you knew the rules very much. You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.

Input Format
Input will consist of three space seperated integers i,j and N

Constraints

N < 10

Output
Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.

Sample Input 1 
3 3 1

Sample Output 1
8
*/
function followKnight(i ,j,curr = 0,N){
    // base cases
    if( i < 1 || j < 1 || i > 10 || j > 10){
        return [];
    } 
    if(curr === N ){
        // return curr;
        return [[i , j]];
    }

    let ans = [];        
    ans = ans.concat(followKnight(i + 1, j + 2, curr + 1, N))
    ans = ans.concat(followKnight(i + 1, j - 2, curr + 1, N))
    ans = ans.concat(followKnight(i - 1, j + 2, curr + 1, N))
    ans = ans.concat(followKnight(i - 1, j - 2, curr + 1, N))
    ans = ans.concat(followKnight(i + 2, j + 1, curr + 1, N))
    ans = ans.concat(followKnight(i + 2, j - 1, curr + 1, N))
    ans = ans.concat(followKnight(i - 2, j + 1, curr + 1, N))
    ans = ans.concat(followKnight(i - 2, j - 1, curr + 1, N))
    
    return ans;
}

function runProgram(input) {
    let [i, j, N] = input.trim().split(" ").map(Number);
    let ans = (followKnight( i ,j ,0,N,));
    let obj = {};
    let finalAns = 0;
    for(let i = 0; i < ans.length; i++){
        if(!obj[ans[i]]){
            finalAns++;
            obj[ans[i]] = 1;
        }
    }
    console.log(finalAns);
}

runProgram(`4 7 6`); //expected 50
