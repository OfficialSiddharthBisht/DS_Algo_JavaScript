/* 
! Applicable for 2 digit numbers for now 
A number is given represented in the form of a linked list. Add one to it.

Input Format : -
This is a function complete problem. You don't have to take the input just complete the function given.

The sample test case is given only for your understanding.

Output Format :-
Return head of linked list which is the new number after incrementing one.

Sample Input 1 
4
2 3 1 3

Sample Output 1
2314

Hint
In the sample test case, the number represented by the linked list is 2->3->1->3 is 2313. After adding one the number becomes 2314, as given in the output .
*/

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    let prev = null ;
    let curr = head;
    while(curr.next!==null){
        prev = curr;
        curr =curr.next;
    }
    if(curr.data!==9){
        curr.data =curr.data+1;
    }else{
        prev.data = prev.data+1;
        curr.data = 0;
    }
    return head;
};

