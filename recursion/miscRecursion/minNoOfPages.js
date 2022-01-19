/*
Let's talk about Shinchan's childhood

He had two types of notebooks, when he was a kid.

* 10 problems could be solved in one page, in the first notebook.

* 12 problems could be solved in one page, in the second notebook.

Shinchan remembered how in order to maintain symmetry, if he was given with n problems in total to solve, he tore out pages from both notebooks, so no space was wasted. EVER!

Given n number of questions, print the minimum number of pages he needs to tear out from the combination of both the notebooks, so that no space is wasted.

Input Format :

The first line will contain t - number of test cases.

The second will contain an integer n - number of questions.

Constraints :

t <= 100

n <= 113

Output Format :-
Corresponding to the input, print the minimum number of pages Shinchan needs to tear out from the combination of both the notebooks. If it is NOT possible, print "-1".

Sample Input 1 

2
23
32
Sample Output 1

-1
3
Hint

Sample1 Explanation :

For 32: 2 pages from the notebook, where 10 can be solved; 1 page from the notebook, where 12 can be solved.
*/
function minNoOfPages(N , np){
    if(N <= 0){
        return 0;
    }
    if(np === N){
        return 0;
    }
    if(np > N){
        return Number.MAX_SAFE_INTEGER;
    }
    return 1 + Math.min(minNoOfPages(N , np + 10),(minNoOfPages(N , np + 12)));
 }
 
 function runProgram (input) {
     // body
     input = input.trim().split("\n");
     let testCases = parseInt(input[0]);
     let line = 1;
     for(let i = 0 ; i <testCases; i++){
         let N = parseInt(input[line++]);
        let ans = (minNoOfPages(N,np = 0));
        if(ans >= Number.MAX_SAFE_INTEGER){
            console.log("-1");
        }else{
            console.log(ans);
        }
     }
 }
 
 runProgram(`2
 23
 32`);