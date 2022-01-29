/*
Stock It Up
Due to recent pandemic announcement we need to make a stock requirement generator, where all the items required for a week with price are given.

For one week:

1. Flour = 5kg| Price = 110 per kg

2. Rice = 2kg| Price = 120 per kg

3. Sugar = 2kg| Price = 42 per kg

4. Pulse = 3kg| Price = 53 per kg

5. Bread = 2 packet | Price = 40 per packet

6. Milk = 5 litre| Price = 32 per litre

7. Oil = 2 litre| Price = 126 per litre

The user will give N number of weeks for stock calculation with a list of 7 elements with 0 and 1 representing each item in the list, if the element is 0 then that item is not required by the person.

The output should be the overall cost of the items for that number of weeks.

Input Format :

N number of weeks

List of 0 and 1 representing the require of the item

Constraints :

0 <= N <= 1000


Output
The cost of overall items for the number of weeks

Sample Input 1 
4
0 1 1 1 0 0 1

Sample Output 1
2940

Hint
Output Explanation :
Items required (0 1 1 1 0 0 1)

Flour No 0

Rice Yes 1

Sugar Yes 1

Pulse Yes 1

Bread No 0

Milk No 0

Oil Yes 1

Cost of items for one week 735

Cost of items for 4 weeks 2940
*/
function stockItUp(N , arr){
    let sum = 0;
    let stock = [110 * 5 , 120 * 2 , 42 * 2 , 53 * 3 , 40 * 2 , 32 * 5, 126 * 2];
    for(let i = 0; i < 7; i++){
        if(arr[i] === 1){
            sum += stock[i];
        }
    }
    return sum * N;
}

function runProgram(input){
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let list = input[1].trim().split(" ").map(Number);
    console.log(stockItUp(N ,list));
}

runProgram(`0
0 1 1 1 0 1 0`)
runProgram(`4
0 1 1 1 0 0 1`)