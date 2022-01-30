/* Given a string str and its length N , print true if the string constains atleast one vowel else print false
*/
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var N = +(input[0]);
    var str=input[1].trim();
    checkVowel(N,str);
  }

  function checkVowel(N,str)
  {
      var vowel="aeiou";
      var M=vowel.length;
      var isVowel=false;
      for(var i=0;i<M;i++)
      {
          for(var j=0;j<N;j++)
          {
              if(vowel[i]===str[j])
              {
                  isVowel=true;
                  break;
              }
          }
      }
      if(isVowel)
      {
        console.log("true");
      }
      else
      {
        console.log("false");
      }
  }
  if (process.env.USERNAME === "offic") {
    runProgram(`1
    o`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }