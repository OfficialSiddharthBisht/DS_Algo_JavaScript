/*Given an array arr of N integers , are there elements a,b,c in the array such that a+b+c=k
Find all the unique triplets in the array which gives the sum of k. 
Notice that the solution must not contain dublicate triplets 
*/
// ? time complexity O(N*N)
function threeSumBy2Pointer(N, arr, K) {
    for (var i = 0; i < N; i++) {
        var j = i + 1;
        var k = j + 1;
        while (j < N - 1) {
            if (arr[i] + arr[j] + arr[k] === K) {
                console.log(arr[i] + " " + arr[j] + " " + arr[k]);
            }
            j++;
            k++;
        }
    }
}
threeSumBy2Pointer(6, [-1, 0, 1, 2, -1, -4], 0);

// input  arr=[-1,0,1,2,-1,-4]  N=6  K=0
// output [-1,-1,2]  and [-1,0,1]
// ! Problem Source - LeetCode