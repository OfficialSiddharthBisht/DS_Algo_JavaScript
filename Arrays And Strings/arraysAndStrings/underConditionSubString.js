/* Given a sting s , To find the count of all such substrings which starts and ends with same character.
? Input
abcab
?Output
7
Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.
So total count is 7. Hence we print 7.
*/
function subStrUnderCond(s){
    //write code here
    let subStr=[];
    let count=0;
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            let temp="";
            for(let k=i;k<=j;k++){
                temp+=s[k];
            }
            subStr.push(temp);
        }
    }
    for(let m=0;m<subStr.length;m++)
    {
        let n=subStr[m].length-1;
        if(subStr[m][0]===subStr[m][n])
        {
            count++;
        }
    }
    console.log(count);
    }
subStrUnderCond("abcab");
    