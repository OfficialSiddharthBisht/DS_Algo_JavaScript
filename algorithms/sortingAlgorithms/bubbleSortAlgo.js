function bubbleSort(N, arr) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    console.log(arr);
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

bubbleSort(5,[6,8,9,2,5]);
