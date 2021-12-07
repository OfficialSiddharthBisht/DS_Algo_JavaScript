/* Finally, India found the vaccine, and things have started getting normal. Offices are opening up, and therefore, you have to shift to Bangalore. Now, to transport your stuff, you hire Packers & Movers. The company has N trucks, and each truck can hold only a certain amount of weight only. Also, because of surge in prices of Fuel, the company has implemented a new policy, that the truck will be granted to the customer, only if the truck is completely occupied, and no extra space is left.

You have to transport K units of weight, since each truck will take the weight exactly equal to its capacity, find the number of ways, in which you can transport K units of weight.

Note : Any truck can be sent any number of times.

Input Format :-
The first line contains K and N, the weight of the stuff you can transport, and the number of trucks available. The next line contains N space separated integers, denoting the capacity of each truck.

Constraints

1 <= K <= 40

1 <= N <= 7

1 <= A[i] <= 10


Output Format :- 
Print a single integer denoting the number of ways, in which you can transport your stuff to Bangalore.

Sample Input 1 

3 3
1 2 3

Sample Output 1
4

Hint
In the sample test cases, the company has 3 trucks. The first truck has a capacity of 1, the second has a capacity of 2, and the third truck has a capacity of 3 units. The total weight to be transported is 3 units. The number of ways in which the weight can be transported is

(1,1,1) -> The first truck is sent thrice, to transport 3 units of weight.

(2,1) -> First, the truck with capacity 2 is sent followed by the truck with capacity 1.

(1,2) ->First, the truck with capacity 1 is sent followed by the truck with capacity 2.

(3) -> The truck with capacity 3 is sent alone.

Therefore, the total number of ways the weight can bedelivered is 4.
*/
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [K, N] = input[0].trim().split(" ").map(Number);
    let capacity = input[1].trim().split(" ").map(Number);
    console.log(packersAndMovers(K, N, capacity));
}

function packersAndMovers(K, N, arr) {
    if (K === 0) {
        return 1;
    }
    if (K < 0) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < N; i++) {
        count += packersAndMovers(K - arr[i], N, arr);
    }
    return count;
}
if (process.env.USER === "siddharth") {
    runProgram(`3 3
    1 2 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
