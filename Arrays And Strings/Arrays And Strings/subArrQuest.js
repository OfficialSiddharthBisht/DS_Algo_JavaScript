/* Given an array A with N positive integers. Count the number of subarrays of length greater than 1, such that the sum of the start and end elements of the subarray is even.
Test 1:
N = 5.
A: 1 2 3 4 5.
The following subarrays have an even sum of start and end elements :
1. 1 2 3
2. 1 2 3 4 5
3. 2 3 4
4. 3 4 5
Hence the answer is 4.
*/
function subArrQuest(N, arr) {
  //write code here
  let subArr = [];
  let count=0;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      let temp = [];
      for (let k = i; k <= j; k++) {
        temp.push(arr[k]);
      }
      subArr.push(temp);
    }
  }
  for (let i = 0; i < subArr.length; i++) {
      if(subArr[i].length!==1)
      {
     if((subArr[i][0]+subArr[i][subArr[i].length-1])%2===0)
     {
         count++;
     }
    }
  }
  console.log(count);
}

subArrQuest(5, [1, 2, 3, 4, 5]);
