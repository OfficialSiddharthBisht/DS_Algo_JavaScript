/*
Given a string S in all lowercase letters and each letter has a value of its own.
The value of the alphabet a is 1,b is 2 , c is 3 till z is 26.
Now I have to find the total value of the given string. The total value of a string is the sum of values of all characters present in string.
*/
function stringValue(S)
{
  var sum=0;
  var alphabets="abcdefghijklmnopqrstuvwxyz";
  for(var i=0;i<alphabets.length;i++)
  {
    // console.log(alphabets[i]+" "+(i+1));
    for(var j=0;j<S.length;j++)
    {
      if(S[j]===alphabets[i])
      {
        // console.log(i+1);
        sum+=(i+1);
      }
    }
  }
  console.log(sum);
}

stringValue("aba");
