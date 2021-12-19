/* Given a set in the form of a string , generate all the subsequence  of the set 
* Example :-
sequence  = "abc"
The sub sequences are 
abc 
ab
ac
a
bc
b
c
*/

function sequence(newStr, str) {
    if (str.length < 1) {
        console.log(newStr);
        return;
    }
    let char = str[0];
    sequence(newStr + char, str.slice(1));
    sequence(newStr,str.slice(1));
    
}

function runProgram(input) {
    let str = input.trim();
    sequence((newStr = ""),str);
}
runProgram(`abcd`)