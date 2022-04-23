/*
 * Uniqueness
You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).
If it has just unique character, output "Unique"
Else in all other cases, output "No"

Input Format
First and the only line contains string S

Constraints
Length of S < 1000

Output
Output one string based on string

Sample Input 1 
siddharth

Sample Output 1
No
*/
function isUnique(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        if(str[i] in obj){
            obj[str[i]] = obj[str[i]] + 1;
            return "No";
        }else{
            obj[str[i]] = 1;
        }
    }
    return "Unique";
}
function runProgram(input){
   console.log(isUnique(input.trim()));
}

runProgram(`siddharth`);
