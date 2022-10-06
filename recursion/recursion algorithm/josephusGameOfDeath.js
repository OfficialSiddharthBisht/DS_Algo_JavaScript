/*
Josephus Problem (Game of Death in a circle)
Given : N people placed in a circle, starting from tthe 1st person, he will shoot tthe kth person from him (including him in count),
Return the person left aka winner

INPUT:
n = 5 , k = 3
--> 3 winner
*/
function josephusGameOfDeath(n , k){
    if(n === 1){
        return 0;
    }
    return (josephusGameOfDeath(n - 1, k) + k) % n;
}

console.log(josephusGameOfDeath(5,3));

/*
fn(n , k) = (fn(n - 1, k) + k) % n
fn(5,3)  --> 3
(fn(4,3)+3) % 5) -->0
(fn(3,3)+3) % 4) --> 1
(fn(2,3)+3) % 3) -->1
(fn(1,3)+3) % 2) --> 0
*/