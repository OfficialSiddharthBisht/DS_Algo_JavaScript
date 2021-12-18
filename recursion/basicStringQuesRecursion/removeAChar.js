/* Given a string remove a specific character from the string , and print it.

Input Format :-
First line of input contains N the number of characters in the string and the character that have to be removed toRemoveChar
Second line of the input contains the string itself .

Output Format :-
A single line of output contains the string without the character that has to be removed

Input :-
5 a
abbac

Output :-
bbc
*/

function removeSpecificChar(N, targetChar, str, i, newStr) {
    if (i === N) {
        return newStr;
    }
    if (str[i] !== targetChar) {
        newStr += str[i];
    }
  return  removeSpecificChar(N, targetChar, str, (i = i + 1),newStr);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let [N, targetChar] = input[0].trim().split(" ");
    N = parseInt(N);
    let str = input[1].trim();
    console.log(removeSpecificChar(N, targetChar, str, 0, ""));
}

runProgram(`5 b
abbac`);
