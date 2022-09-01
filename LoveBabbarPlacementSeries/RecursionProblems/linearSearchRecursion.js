// ? Linear Search Using Recursion : 
// Given an array and a target element K find if k is present in the array if yes then find its index else return -1


function linearSearchRecursion (arr , target , i) {
    //base case
    if(arr[i] === target){
        return i;
    }
    if(i === arr.length){
        return -1;
    }
   return linearSearchRecursion(arr , target , i + 1);
}

console.log(linearSearchRecursion([1,2,3,4,6],8,0));