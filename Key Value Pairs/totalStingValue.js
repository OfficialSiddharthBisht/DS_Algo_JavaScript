/* Given a string S of all lowercase letters and each letter has a value to its own .
The value of alphabet a is 1 b is 2 ..... z is 26.
To find the total value of the given stirng. The total value of a sting is the sum of values of all characters present in the string.
?Input
aba
?Output
4
Here the first character a has a weight of 1,the second character b has 2 and the third character a again has the weight of 1
So the sum of string aba here is equal to 1+2+1=4
*/
function stringValue(S) {
    //write code here
  let obj={};
  let sum=0;
  let alpha="abcdefghijklmnopqrstuvwxyz";
  for(let i=0;i<alpha.length;i++)
  {
          obj[alpha[i]]=i+1;
  }
//   console.log(obj);
  for(let j=0;j<S.length;j++)
  {
      for(let key in obj)
      {
          if(key===S[j])
          {
            sum+=obj[key];
          }
      }
  }
  console.log(sum);
}
  stringValue("abc");
  