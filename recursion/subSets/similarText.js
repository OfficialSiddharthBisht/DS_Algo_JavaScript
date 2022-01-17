/*
Virat and Rohit don't like each other though they have many similarities. You are given 2 texts (strings) written by Virat and Rohit. Your task is to write a program that calculates the length of the longest similar characters in the text written by both.

If string written by Virat is “AGGTAB” and that by Rohit is “GXTXAYB”, then the longest set of similar characters is “GTAB”, which is of length 4.

Please note that the longest set of similar characters need not be continuous.

Input Format :

First line contains text/string written by Virat

Second line contains text/string written by Rohit

Constraints :

Length of string <= 20

Output
Print the length as per conditions given in problem statement

Sample Input 1 
AEDFHR
ABCDGH

Sample Output 1
3
*/
function runProgram (input) {
    input = input.trim().split("\n");
    let virat  = input[0].trim();
    let rohit = input[1].trim();
    console.log(similarText(virat ,rohit ,i = 0,j = 0,curr = 0));
}

function similarText(str1 , str2 , i , j , curr){
    if(i >= str1.length || j >= str2.length){
        return curr;
    }
    if(str1[i] === str2[j]){
        return similarText(str1 , str2 , i + 1 , j +1 ,curr +1);
    }
    return Math.max(similarText(str1 , str2 ,i +1 , j,curr),similarText(str1 , str2 , i , j + 1,curr));
}

runProgram(`AEDFHR
ABCDGH`);
