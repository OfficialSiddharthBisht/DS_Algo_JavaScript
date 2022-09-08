/*
* Plus One
Given a number represented as an array of digits, plus one to the number.  

Example Questions Candidate Might Ask: 

Q: Could the number be negative? 
A: No. Assume it is a non-negative number. 

Q: How are the digits ordered in the list? For example, is the number 12 represented by [1,2] or [2,1]?
A: The digits are stored such that the most significant digit is at the head of the list.
 
Q: Could the number contain leading zeros, such as [0,0,1]?
A : No 
*/
function plusOne(arr){
    let N = arr.length;
    let carry = 0;
    for(let i = N - 1; i >= 0; i--){
        if(arr[i] < 9){
            arr[i] = arr[i] + 1;
            return arr;
        }
        if(arr[i] >= 9){
            arr[i] = 0;
            carry = 1; // it cannot excede 18
        }
    }
    if(arr[0] === 0){
        arr.unshift(carry);
    }
    return arr;
}


console.log(plusOne([2,9,9]));
console.log(plusOne([9,9,9,9,9]));
function plusOne1(arr){
    let N = arr.length;
    // reversing the array
    let i = 0; 
    let j = N - 1;
    while(i < j){
        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[i] ^ arr[j];
        arr[i] = arr[i] ^ arr[j];
        i++;
        j--;
    }
    arr[0] = arr[0] + 1;
    let k = 0;
    if(arr[0] > 9){
        while(arr[k] > 9){
            arr[k] = arr[k] % 10;
            arr[k + 1] += 1; 
            k++;
        }
    } 
    if(arr[N] === 0){
        arr.push(1);
    }
    return arr;
}

