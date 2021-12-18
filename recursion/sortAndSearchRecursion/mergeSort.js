// Given an unsorted array , sort the array with the help of merge sort
let arr = [6, 3, 9, 5, 2, 8, 7, 1];
function mergeSort(arr) {
    if (arr.length ===1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let rigth = mergeSort(arr.slice(mid, arr.length));

    return merge(mergeSort(left),mergeSort(rigth));
}

function merge(first, second) {
    let mix = [];
    let i = 0; // pointer for array first
    let j = 0; // pointer for array second
    let k = 0; // pointer for new array mix
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            mix[k] = first[i];
            i++;
        } else {
            mix[k] = second[j];
            j++;
        }
        k++;
    }
    //it may be possible that one of the arrays is not complete in these case we copy the remaining elements
    while (i < first.length) {
        mix[k] = first[i];
        i++;
        k++;
    }
    while (j < second.length) {
        mix[k] = second[j];
        j++;
        k++;
    }
    return mix;
}
console.log(mergeSort(arr));
