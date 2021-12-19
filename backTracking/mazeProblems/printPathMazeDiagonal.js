/* Given a maze of N X M where N is the number of rows and M is the number of columns . Assume that there is no obsticle . Count the number of paths from which you can reach to the target from starting position , you can go horizontal , vertical as well as diagonally
____________________
|start|     |       |
|-----|-----|-------|
|     |     |       |
|-----|-----|-------|
|     |     | Target|
---------------------
Input Format :-
A single line of input contains space seperated rows and columns

Output :-
The count of possible ways we can reach from start to end .
* Input :-
3 3

*Output
Diagonal Diagonal 
Diagonal Down  Right 
Diagonal Right Down  
Down  Diagonal Right 
Down  Down  Right Right 
Down  Right Diagonal 
Down  Right Down  Right 
Down  Right Right Down  
Right Diagonal Down  
Right Down  Diagonal 
Right Down  Down  Right 
Right Down  Right Down  
Right Right Down  Down  
*/
function printPathsInMaze(ans, row, col) {
    if (row === 1 && col === 1) {
        console.log(ans);
        return;
    }
    if (row > 1 && col > 1) {
        printPathsInMaze(ans + "Diagonal ", row - 1, col - 1);
    }
    if (row > 1) {
        printPathsInMaze(ans + "Down  ", row - 1, col);
    }
    if (col > 1) {
        printPathsInMaze(ans + "Right ", row, col - 1);
    }
}

function runProgram(input) {
    input = input.trim().split(" ");
    let row = parseInt(input[0]);
    let col = parseInt(input[1]);
    printPathsInMaze("", row, col);
}
runProgram(`3 3`);
