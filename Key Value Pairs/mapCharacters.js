/*You are given a number stored in a variable with the nameN

You have to print the first N English smaller case alphabets, mapped with the values starting from 1 toN, including the value stored inN

For example, consider the value stored inN = 3, then the required output will be

a-1
b-2
c-3
Note : The value stored in N will always be less than or equal to 26, and greater than 0 
*/
function mapChar(N) {
    // Write code here
    let alpha="abcdefghijklmnopqrstuvwxyz";
    let obj={};
    for(let i=0;i<N;i++)
    {
        obj[alpha[i]]=i+1;
    }
   for(let key in obj)
   {
       console.log(key+"-"+obj[key]);
   }
}
mapChar(5);