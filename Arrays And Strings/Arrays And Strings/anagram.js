/* Given 2 strings , to write a program that detects if both are anagrams of each other.
If they are anagrams , print "True"
Else print False
*/
function anagram(str1,str2)
{
  var count=[];
  var isAnagram=true;
  var arr=[];
  for(var i=0;i<256;i++)
  {
    arr.push(0);
  }
  // console.log(arr);
  if(str1.length===str2.length)
  {
    for(var i=0;i<str1.length;i++)
    {
      count[str1[i]-('a'.charCodeAt(0))]++;
      count[str2[i]-('b'.charCodeAt(0))]--
    }
    console.log(count);
    for(var i=0;i<256;i++)
    {
      if(count[i]!==0)
      {
        isAnagram=false;
      }
    }
  }
  if(isAnagram)
  {
    console.log("True");
  }
  else 
{
  console.log("False");
}
}
anagram("sid","sid");