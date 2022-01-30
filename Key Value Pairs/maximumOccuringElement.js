/* Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.
If there are two elements present the maximum number of times, print the one which comes first in the array.
?Input                  Output
5                       0
0 2 0 6 9
*/
function maximumOccuringElement(A,N){
    //write code here
    var maxFrequency=0;
    let obj={};
    for(let i=0;i<N;i++)
    {
        if(obj[A[i]]!==undefined)
        {
            obj[A[i]]++;
        }
        else 
        {
            obj[A[i]]=1;
        }
    }
    for(let key in obj)
    {
        if(maxFrequency<obj[key])
        {
            maxFrequency=obj[key];
        }
    }
    console.log(maxFrequency);
}

maximumOccuringElement([0,2,0,6,9],5);
