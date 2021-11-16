/* Selection Sort is a sorting algorithm which works in such a way that the entire list is divided into two parts - the sorted part , and the unsorted part.
Initially , the sorted part is empty and the unsorted part contains all the elements in the list itself.
The smallest element is selected from the unsorted array and swapped with the leftmost element,and that element and the becomes a part of the sorted array.
This process continues moving unsorted array boundarty such that the input array is modified into sorted form and no extra space is required.
*/
//? Time Complexity -O(N*N)
//? Space Complexity - O(1)
function selectionSort (arr) {
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let min=i;
        for(j=i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min=j;
            }
            swap(arr,min,i);
        }
    }
    console.log(arr);
}

function swap (arr,min,i) {
    let temp=arr[min];
    arr[min]=arr[i];
    arr[i]=temp;
}
selectionSort([5,4,8,9,7,2]);