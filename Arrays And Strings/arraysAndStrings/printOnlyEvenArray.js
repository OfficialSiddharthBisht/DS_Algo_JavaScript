// You are given an array, stored in a variable with the name arr
// The size of the array is stored in a variable with the name n
// You have to traverse the array, and print only the even elements in the array.
// Print each number on a new line
// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5
// Then, the required output will be
// 2
// 4
// The above are the only two even numbers in the given array
// Input
// The first line of the input contains the value stored inN, the size of the array
// The next line containsNspace separated numbers denoting the elements of the array
// Output
// Print the even elements present in the array, as explained in the problem statement
function evenArray(n, arr){
    //write code here
    for(let i=0;i<n;i++)
    {
        if(arr[i]%2===0)
        {
            console.log(arr[i]);
        }
    }
}

evenArray(5,[1,2,3,4,5]);