var str="aaman";
var obj={};
for(var key of str)
{
    if(obj[key]==undefined)
    {
        obj[key]=1;
    }
    else
    {
        obj[key]=obj[key]+1;
    }
}
console.log(obj);
for(var key in obj)
{
    console.log(`${key}-${obj[key]}`)
}
