/* Given a string remove a specific character from the string lets say 'a' , and print it.

Input Format :-
First line of input contains N the number of characters in the string and the character that have to be removed toRemoveChar
Second line of the input contains the string itself .

Output Format :-
A single line of output contains the string without the character that has to be removed

Input :-
abbac

Output :-
bbc
*/
function removeSpecificChar(str,newStr){
    if(str.length<1){
        return newStr;
    }
    if(str[0]!=='a'){
        newStr+=str[0];
    }
    return removeSpecificChar(str.slice(1),newStr);
}

function runProgram(input) {
    let str = input.trim();
 console.log(removeSpecificChar(str,ans=""));
}
runProgram(`abbac`);
