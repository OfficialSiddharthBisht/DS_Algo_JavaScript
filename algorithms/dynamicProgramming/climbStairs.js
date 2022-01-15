/* Given a number N representing the number of stairs in a staircase
You are on the 0th step and are required to climb the top.
In one move , you are allowed to climb 1 2 or 3 stairs.
You are required to print the number of different paths via which you can climb to the top.

* Input Format : -
A number N

* Output Format : -
A number representing the number of ways to climb the stairs from 0 to top.

Input
6

Output 
24
*/
let obj = {};
function countPaths(N){
    //base case
    if(N < 0){
        return 0;
    }
    if(N === 0){
        return 1;
    }
    if(obj[N]){
        return obj[N];
    }
    // console.log("See " + N); 
    let  x = countPaths(N-1);
    let y = countPaths(N-2);
    let z = countPaths(N-3);
    let totalPaths = x + y + z;
    obj[N] = totalPaths;
    return totalPaths;
}

console.log(countPaths(6));
console.log(countPaths(2));
console.log(countPaths(1));
console.log(countPaths(3));