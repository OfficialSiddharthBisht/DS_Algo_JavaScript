/*  Reverse Array Traversal
 You are given an array, stored in a variable with the name arr
The size of the array is stored in a variable with the name size
You have to print the reverse traversal of the array
For example, consider the value stored insize = 4, and the array isarr = [1 2 3 4]. Then, the required output will be
4 3 2 1
*/
function reverseArrayTraversal1(n, arr){
    //write code here
    let revArr="";
    for(let i=n-1;i>=0;i--)
    {
        revArr+=arr[i]+" ";
    }
    console.log(revArr);
}
reverseArrayTraversal(5,[1,2,3,4,5]);

function reverseArrayTraversal(n, arr){
    //write code here
    let i=0;
    let j=n-1;
    while(i<j)
    {
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    console.log(arr);
}