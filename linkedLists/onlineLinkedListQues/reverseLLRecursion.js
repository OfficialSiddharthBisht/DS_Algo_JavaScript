/*
? Reverse The Linked List By Recursion
Given the pointer to the head node of a linked list, change thepointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.

Complete thereversefunction in the editor below.

reversehas the following parameter:

LinkedListNode pointer head:a reference to the head of a list

Input Format :-
The first line contains an integer t, the number of test cases.

Each test case has the following format:

The first line contains an integer n, the number of elements in the linked list.
Each of the next n linescontains an integer, the data valuesof the elements in the linked list.

t <= 50

n <= 1000

list[i] <=1000

Output Format : -
For each test case print the updated Linked List

Sample Input 1 
1
5
1
2
3
4
5

Sample Output 1
5 4 3 2 1 
*/

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    return reverseLLByRecursion(head,null);
}

function reverseLLByRecursion(curr,prev){
    if(curr===null){
        return prev;
    }
    let temp = curr.next ;
    curr.next = prev;
   return reverseLLByRecursion(temp,curr);
}

