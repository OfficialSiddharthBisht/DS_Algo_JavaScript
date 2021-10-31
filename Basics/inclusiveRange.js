/* 
You are given two numbers, stored in the variable with the namesleft, rightrespectively
You have to print all the numbers in the range of [left, right],(including the values stored in left and right) such that the current number is double of the previous number
For example, consider the value stored inleft = 2, and the value stored inright = 10, then the required output will be
2
4
8
We, start from 2, and double the value so we get 4, and the value is further doubled, so the value becomes 8. The next value in the series will be 16, but since it is greater than the value stored atright = 10, we do not consider it
*/
function rangeOfTwo(left, right) {
    //write code here
    for(let i=left;i<=right;i=i*2)
    {
        console.log(i);
    }
  }
rangeOfTwo(4,10);