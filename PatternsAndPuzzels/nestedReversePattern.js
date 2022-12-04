/*
* Nested Reverse Pattern

You are given a number, stored in a variable with the namenum
You have to printnumlines, and on each line print all the numbers starting fromnumto the value 1.
For example, if the value stored innum = 5, then the required output is

5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1

Input
The first and the only line of the input contains the value stored innum

Output
Print the output as mentioned in the problem statement

Sample Input 1 
4

Sample Output 1
4 3 2 1
4 3 2 1
4 3 2 1
4 3 2 1

Hint
In the sample test case, the value stored innum = 4
Therefore, we print 4 lines, and on each line, we print all the values from[4,1] in decreasing order.
Hence, the output will be
4 3 2 1
4 3 2 1
4 3 2 1
4 3 2 1
*/
function nestedReversePattern(num) {
    // Write code here
    for (let i = 0; i < num; i++) {
        let str = "";
        for (let j = num; j > 0; j--) {
            str += j + " ";
        }
        console.log(str);
    }
}
