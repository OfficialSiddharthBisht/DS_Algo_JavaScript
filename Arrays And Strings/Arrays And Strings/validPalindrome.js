// Source Leetcode - https://leetcode.com/problems/valid-palindrome/
// let s="A man, a plan, a canal: Panama";
// let s="race a car";
let s="0P";
s=s.toLowerCase();
let alphaNum="abcdefghijklmnopqrstuvwxyz0123456789";
var str="";
for(let i=0;i<s.length;i++)
{
    for(let j=0;j<alphaNum.length;j++)
    {
        if(s[i]===alphaNum[j])
        {
            str+=alphaNum[j]
        }
    }
}
let i=0;
let j=str.length-1;
while(i<j)
{
    if(str[i]!==str[j])
    {
       console.log("false");
       return;
    }
    i++;
    j--;
}
console.log("true");