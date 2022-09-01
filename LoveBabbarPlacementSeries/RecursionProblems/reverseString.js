// ? Reverse String Using Recursion
function reverseStr (str , i , newStr = "") {
    if(i === 0){
        return newStr;
    }
    newStr += reverseStr(str, i = i - 1 , newStr);
}


console.log(reverseStr("siddharth" , str.length - 1));