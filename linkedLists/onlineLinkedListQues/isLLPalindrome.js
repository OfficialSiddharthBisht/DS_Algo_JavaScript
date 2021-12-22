/* 
? Is Linked List Palindrome
Given a singly linked list, determine if it is a palindrome.
No need to take any input, You'll be given the pointer to the head of the linked list,Complete the function belowand return true if it's a palindrome and false if otherwise.

Input Format :-
This is a function complete problem.

Refer to sample input for understanding

The first line contains the number of nodes (n)

Next n lines contains the nodes of the linked list.

n <= 1000

list[i] <= 1000

Output Format :-
Complete the function

Sample Input 1 
3
1
2
1

Sample Output 1
true
*/
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let revHead = reverseOfLL(head);
    let curr1 = head;
    let curr2 = revHead;
    while(curr1!==null){
        if(curr1.data!==curr2.data){
            return false;
        }
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    return true;
};

function reverseOfLL(head){
    let curr = head;
    let prev = null;
    let next = null;
    while(curr!==null){
        next =curr.next;
        curr.next =prev;
        prev =curr;
        curr =next
    }
    head = prev;
    return head;
}