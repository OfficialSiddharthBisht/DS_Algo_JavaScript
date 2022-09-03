/*
* Find ith bit
Given a number N, and an index i to find the ith bit is 0 or 1 after that number is converted
into binary.
* Input Format :- 
N i

* Output Format :-
zero or 
one
*/

function findithbit(N, i){
    let mask = N << i;
    if(N & mask){
        console.log("one");
    }else{
        console.log("zero");
    }
}

findithbit(15,4);