// Iterative function -
// to print the elements of an array
function printElements (arr,N) {
    for(let i=0;i<N;i++){
        console.log(arr[i]);
    }
}
printElements([1,2,3,4,5],5);
// Recursive Function to print the elements of the array
function printElementsByRecursion (arr,N,i) {
    if(i===N){
        return;
    }
    console.log(arr[i]);
    printElementsByRecursion(arr,N,i+1);
}
printElementsByRecursion([6,7,8,9,10],5,0);
// in the above recursive function the base case is i+1 if its not there then the value of i will never increase and leads our function to infinity.
