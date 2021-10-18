/* Given a string s .
I need to write a program that reverses the order/sequence in which words are present in the sentence keeping the case of each character preserved (uppercase letter should remain uppercase and lowercase letters should remain lowercase)
eg- A Transformation in education  
    education in Transformation A 
*/
function masaiSentenceReverse(s)
{
  s+=" ";
 var arr=[];
 var str="";
 for(var i=0;i<s.length;i++)
 {
   str+=s[i];
   if(s[i]===" ")
   {
     arr.push(str);
     str="";
   }
 }
 console.log(arr);
 var rev="";
 for(var i=arr.length-1;i>=0;i--)
 {
  rev+=arr[i];
 }
 console.log(rev);
}
masaiSentenceReverse("A Transformation in education");
//sample output education in Transformation A