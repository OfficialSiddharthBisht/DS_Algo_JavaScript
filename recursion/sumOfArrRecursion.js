/* Given an array arr and its length N , find the sum of all the array elements using recursion.
*/
function sumOfArrayElementsUsingRecursion(arr,N,i){
    var sum=0;
    //base case
    if(i===N){
        return sum;
    }
    sum+=arr[i]+sumOfArrayElementsUsingRecursion(arr,N,i+1);
    return sum;
}
console.log(sumOfArrayElementsUsingRecursion([1,2,3,4],4,0));