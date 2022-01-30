/* Given a sting S. Find if the string can be converted into a palindrome. You are free to rearrange the string in any way you want . Rearrangement refers to the fact that the characters can be arranged in any way in the string .
Deletion and addition of the characters is not allowed.
?Input
2    // test cases
6    // N the no. of characters in the string
aabbcc   // string S
5
aabcd
? Output
Possible!
Not Possible!
*/
function detectPalII(N, string){
    //write code here
    let obj={};
    let count=0;
    for(let i=0;i<N;i++)
    {
        if(obj[string[i]]===undefined)
        {
            obj[string[i]]=1;
        }
        else
        {
            obj[string[i]]=obj[string[i]]+1;
        }
    }
    for(let key in obj)
    {
        if(obj[key]%2!==0)
        {
           count++;
        }
    }
    if(count===1||count===0)
    {
        console.log("Possible!");
    }
    else
    {
        console.log("Not Possible!");
    }

}

detectPalII(10,"aabdbccdaz");
