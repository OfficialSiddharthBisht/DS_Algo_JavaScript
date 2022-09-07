/*
* Valid Number
Validate if a given string is numeric. Some examples:
"0"  true 
"0.1"  true 
"abc"  false 
_____________________________________

* Example Questions Candidate Might Ask: 
Q: How to account for whitespaces in the string? A: When deciding if a string is numeric, ignore both leading and trailing whitespaces. Q: Should I ignore spaces in between numbers – such as “1 1”? 

A: No, only ignore leading and trailing whitespaces. “1 1” is not numeric. Q: If the string contains additional characters after a number, is it considered valid? A: No. If the string contains any non-numeric characters (excluding whitespaces and decimal 
point), it is not numeric.

Q: Is it valid if a plus or minus sign appear before the number? 
A: Yes. “+1” and “-1” are both numeric. Q: Should I consider only numbers in decimal? How about numbers in other bases such as 
hexadecimal (0xFF)? 

A: Only consider decimal numbers. “0xFF” is not numeric. 
Q: Should I consider exponent such as “1e10” as numeric? A: No. But feel free to work on the challenge that takes exponent into consideration.
*/
function isNumberValidBF(str){
    let N = str.length;
    let i = 0;
    // starting white spaces
    while(i < N && str[i] == " " || str[i] === "+" || str[i] === "-"){
        i++;
    }
    let isNum = false;
    while(i < N && str[i]!== "." && str[i] !== " " && parseInt(str[i])){
            isNum = true;
            i++;
    }
    if(i < N && str[i] === "."){
        i++;
        while(i < N && str[i]!== "." && str[i] !== " " && parseInt(str[i])){
            isNum = true;
            i++;
    }
    while(i < N && str[i] === " "){
        i++;
    }
    }
    return isNum && i === N;
}
console.log(isNumberValidBF(" +1.12"));

/*
Due to many corner 
cases, it is helpful to break the problem down to several components that can be solved 
individually. A string could be divided into these four substrings in the order from left to right: 
s1. Leading whitespaces (optional). 
s2. Plus (+) or minus (–) sign (optional). 
s3. Number. 
s4. Optional trailing whitespaces (optional). We ignore s1, s2, s4 and evaluate whether s3 is a valid number. We realize that a number 
could either be a whole number or a decimal number. For a whole number, it is easy: We 
evaluate whether s3 contains only digits and we are done. 
  

*/