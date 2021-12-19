/* Given a maze of N X M where N is the number of rows and M is the number of columns . Assume that there is no obsticle . Count the number of paths from which you can reach to the target from starting position
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
6
*/
function countPathsInMaze(row, col) {
    if(row===1||col===1){
        return 1;
    }
    let left = countPathsInMaze(row-1,col);
    let right = countPathsInMaze(row,col-1);
    return left+right;
}

function runProgram(input) {
    input = input.trim().split(" ");
    let row = parseInt(input[0]);
    let col = parseInt(input[1]);
    console.log(countPathsInMaze(row, col));
}
runProgram(`3 3`);
