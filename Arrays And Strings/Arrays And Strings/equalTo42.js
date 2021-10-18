// You are given an array of N integers. Output "Yes" if 42 is present in array, else print "No".
function isEqualTo42(arr)
{
  isFound=false;
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]===42)
    {
      isFound=true;
      break;
    }
  }
  if(isFound)
  {
    console.log("Yes");
  }
  else
  {
    console.log("No");
  }
}
isEqualTo42([56,65,68,95]); // outputs yes
isEqualTo42([56,58,42,65]); // outputs no
