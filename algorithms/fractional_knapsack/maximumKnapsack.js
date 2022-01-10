/*
* Maximum between weights and price Using Fractional Knapsack
We are given N items with their corrosponding weights and values , we have a knapsack weighing W . We have to choose among these N items to put into the knapsack such that the value of the knapsack is maximum .
? Input  : -
Items = [[60,10],[100,20],[120,30]]
knapsack capacity = 50
? Output :-
Max Possible values  = 240
*/
function fractional_knapsack(n, weights, capacity, profits) {
    let combined = [];
    for (let i = 0; i < n; i++) {
        combined.push([profits[i] / weights[i], i]);
    }
    // console.log(combined);
    combined = combined.sort(function (a, b) {
        return b - a;
    }); //sorting the combined array in descending order

    let ibi = -1; //index of best item = ibi
    let max = 0;
    let curr = 0;
    // -----------------------------------------if block to take everything as a whole till when it is possible
    for(let i = 0; i < n; i++){
        ibi = combined[i][1];
        if(curr + weights[ibi] <= capacity){
            max += profits[ibi];
            curr += weights[ibi];
            ibi = -1; 
        }else{   //----------------------else block looks after the whole part is complete , the fractional things.
            if(curr < capacity && ibi !== -1){
                let rc = capacity - curr; // rc = remaining capacity 
                max += (rc/weights[ibi])*profits[ibi];
            }
            break;
        }
    }
    return max;
}

console.log(fractional_knapsack(3, [10, 20, 30], 50, [60, 100, 120]));
