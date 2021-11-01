/* Maximum in array 
Given an array stored in a variable with the size arr
The size of the array is stored in a variable with the name n
To find the maximum number in the array
Eg - arr= [1,2,3,4,5] & N=5
max= 5; 
*/
function maximumInArray(N,arr){
    //write code here
    var max=Number.MIN_SAFE_INTEGER;
    // taking min safe integer cauz if we take zero then our condition is not gonna work on negative numbers
    for(let i=0;i<N;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    console.log(max);
}
maximumInArray(5,[-1,-5,8,6,2]);
