/* given a string, whose size is stored in a variable with the name N
The string is stored in a variable with the namestr
You have to printtrue, if the string contains at least one vowel, otherwise printfalse
For example, consider the value stored inN = 6, and the value stored instr = "nrupul", then the output will betrue, since the string contains the vowelutwice
Note : The string only contains lowercase English alphabets
Note : The vowels in the English Alphabet are considered the following - a,e,i,o,u
*/
function checkVowel(N, str) {
    //write code here
    let vowels="aeiou";
    for(let i=0;i<vowels.length;i++)
    {
        for(let j=0;j<N;j++)
        {
            if(str[j]===vowels[i])
            {
                console.log("true");
                return;
            }
        }
    }
    console.log("false");
  }
  checkVowel(4,"star");
  