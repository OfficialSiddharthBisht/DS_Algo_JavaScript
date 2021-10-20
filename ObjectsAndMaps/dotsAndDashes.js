// even *
// odd _
//! Need Description
var N=5;
var str="";
for(var i=1;i<=N;i++)
{
    //check for even 
    if(i%2===0)
    {
        for(var j=1;j<=N;j++)
        {
        str+="*";
        }
        console.log(str);
    }
    else
    {
        for(var j=1;j<=N;j++)
        {
        str+="_";
        }
        console.log(str);
    }
    // console.log(str);
    str="";
}

