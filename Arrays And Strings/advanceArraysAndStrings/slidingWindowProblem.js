//! TO Understand sliding window
// 2 5 9 16 1 96
/* To find the new array formed by all subarrys of length K(2) */
// 2+5 = 7 ,
// 5+9 = 14 , 
// 9+16 = 25 ,
//16+1 = 17 ,
// 1+96 = 97 or
//? we can find the length of the first window then add the after element to the window and remove the previous (known as sliding)
// first window 2+5 =7
// {7 +(9)-2}= 14
// {14+16-(5)} = 25
// {25+1-(9)}=17
//{17+96-(16)}=97 
function slidingWindow (arr,N,k) {
    let sum=0;
    let ans=[];
    //to find the sum of the first window
    for(let i=0;i<k;i++)
    {
        sum+=arr[i];
    }
    // console.log(sum);
    ans.push(sum);

    //to find the sum of other windows
    for(let i=k;i<N;i++)
    {
        sum=sum-arr[i-k]; // to remove the previous element from the window
        sum=sum+arr[i]; // to add the next element of the next window
        ans.push(sum);
    }
    console.log(ans);
}
slidingWindow([2,5,9,16,1,96],6,2);