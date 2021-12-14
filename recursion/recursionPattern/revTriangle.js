/* Given a number N , print the below reverse triangle pattern using recursion 

Input Format :-
First and only line contains a number N.

Output Format :-
Prints a reverse triangle as shown.
-----------------------------------------------------------
Input :-
5

Output:-
*****
****
***
**
*
-----------------------------------------------------------
*/
function revTriangle(row,column,str){
    if(row===0){
        return;
    }
    if(column<row){
        str+="*";
        // console.log(str);
        revTriangle(row,column+=1,str);
        console.log(str);
    }else{
        revTriangle(row-=1,column,str);
        
    }
}

function runProgram (input) {
    let row=parseInt(input);
   revTriangle(row,column=0,ans="");
}
runProgram(`5`);