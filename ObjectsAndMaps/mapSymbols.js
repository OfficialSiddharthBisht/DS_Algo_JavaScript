/*
You are given a number stored in a variable with the nameN
You have to map the following symbols starting from the valueN
The mapping is such that the difference between the values of two characters, is 2
'!','@','#','$','%','^','&','*'
For example, consider the value stored inN = 10, then the required output will be
!-10
@-12
#-14
$-16
%-18
^-20
&-22
*-24
*/
function mapSymbols(N) {
    // Write code here
    let obj={};
    let symbols="!@#$%^&*";
    let temp=0;
    for(let i=0;i<symbols.length;i++)
    {
        obj[symbols[i]]=N+temp;
        temp+=2;
    }
    // console.log(obj);
    for(let key in obj)
    {
        console.log(key+"-"+obj[key]);
    }
}
mapSymbols(20)
