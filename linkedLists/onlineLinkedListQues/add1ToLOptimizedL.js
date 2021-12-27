/* A number is given represented in the form of a linked list. Add one to it.

Input Format :-
This is a function complete problem. You don't have to take the input just complete the function given.

The sample test case is given only for your understanding.


Output Format : -
Return head of linked list which is the new number after incrementing one.

Sample Input 1 
4
2 3 1 3

Sample Output 1
2314

Hint
In the sample test case, the number represented by the linked list is 2->3->1->3 is 2313. After adding one the number becomes 2314, as given in the output.
*/

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    let revHead = reverseLL(head);
    let carry = 1;
    let curr =revHead;
    while(carry > 0 && curr!== null){
        let currData = curr.data;
        curr.data = (currData + carry)%10;
        carry = parseInt((currData + carry)/10);
        curr= curr.next;
    }
    let newHead = reverseLL(revHead);
    if(carry > 0){
        let newNode = new LinkedListNode(carry);
        newNode.next = newHead;
        newHead = newNode;
    }
    return newHead;
};

function reverseLL(head){
    let curr = head;
    let prev = null;
    let next = null;
    while(curr!==null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    return head;
}
