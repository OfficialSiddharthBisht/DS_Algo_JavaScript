/*
Delete Node Without Head In A Linked List
Problem Link :- https://practice.geeksforgeeks.org/problems/delete-without-head-pointer/1/?problemStatus=unsolved&problemType=functional&page=1&sortBy=submissions&query=problemStatusunsolvedproblemTypefunctionalpage1sortBysubmissions#

You are given a pointer/ reference to the node which is to be deleted from the linked list of N nodes. The task is to delete the node. Pointer/ reference to head node is not given. 
Note: No head reference is given to you. It is guaranteed that the node to be deleted is not a tail node in the linked list.

Example 1:
Input:
N = 2
value[] = {1,2}
node = 1
Output: 2
Explanation: After deleting 1 from the
linked list, we have remaining nodes
as 2.

Example 2:
Input:
N = 4
value[] = {10,20,4,30}
node = 20
Output: 10 4 30
Explanation: After deleting 20 from
the linked list, we have remaining
nodes as 10, 4 and 30.
Your Task:
You only need to complete the function deleteNode that takes reference to the node that needs to be deleted. The printing is done automatically by the driver code.

Expected Time Complexity : O(1)
Expected Auxilliary Space : O(1)

Constraints:
1 <= N <= 103

Company Tags
 *Amazon 
 *Goldman Sachs 
 *Kritikal Solutions 
 *Microsoft 
 *Samsung 
 *Visa
*/
// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = null;

function findNode(head, search_for)
{
    let current = head;
    while (current !== null)
    {
        if (current.data == search_for)
            break;
        current = current.next;
    }
    return current;
}

function printlist(head){
    let current = head; 
    let s='';
    while (current !== null)
    {
        s+=current.data+" ";
        current = current.next;
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for(let i=1;i<n;i++){
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let k = parseInt(readLine());
        let del = findNode(head, k);
        if(del !== null && del.next !== null){
            let obj = new Solution();
            obj.deleteNode(del);
        }
        printlist(head);
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} del
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;

*/

//Function to delete a node without any reference to head pointer.
class Solution {
    
    deleteNode(del)
    {
        //your code here
        del.data = del.next.data;
        del.next = del.next.next;
    }
}