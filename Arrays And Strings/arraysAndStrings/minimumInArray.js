// Given an array, stored in a variable with the sizearr
// The size of the array is stored in a variable with the namen
// You have to find the minimum number in the array
// For example, consider the array asarr = [1 2 3 4 5], and the value stored in n = 5
// Then, the required output will be1, as it is the smallest number in the array
function minimumInArray(N,arr){
    //write code here
    var min=Number.MAX_SAFE_INTEGER;
    for(let i=0;i<N;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }
    console.log(min);
}
minimumInArray(5,[6,5,9,-5,2])