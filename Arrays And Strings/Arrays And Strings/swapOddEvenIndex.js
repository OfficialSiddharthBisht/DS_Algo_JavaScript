let N=6;
let arr=["A","B","C","D","E","F"];
for(let i=0;i<N;i=i+2)
{
    let temp=arr[i]
    arr[i]=arr[i+1];
    arr[i+1]=temp;
}
console.log(arr);