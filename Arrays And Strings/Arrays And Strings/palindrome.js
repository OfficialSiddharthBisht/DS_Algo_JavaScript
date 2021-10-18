/* Given an integer num.
Pint yes if that integer is a palindrome or else print no
*/
function isPalindrome(num)
{
  var isPalindrome=true;
  num=num.toString();
 var i=0;
 var j=(num.length-1);
 while(i<=j)
 {
   if(num[i]!==num[j])
   {
     isPalindrome=false;
     break;
   }
   i++;
   j--;
 }
 return isPalindrome;
}

console.log(isPalindrome(12212));