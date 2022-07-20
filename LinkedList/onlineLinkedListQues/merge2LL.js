/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Complete the function below and return the head of the new linked list.

Input Format :-
This is a function complete problem

To get a understanding of the input-

The first line contains the number of nodes in the first linked list (n1)

Next n1 lines contains the nodes of the first linked list

Next line contains the number of nodes in the second linked list (n2)

Next n2 lines contains the nodes of the second linked list

n1, n2 <= 1000

list[i] <= 1000

Output Format :-
Complete the function

Sample Input 1 :-

3
1
1
2
4
2
3
4
5

Sample Output 1 :-
1 1 2 2 3 4 5
*/

const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    let newList = new ListNode(0);
    let head = newList;
    while(l1!==null && l2!==null){
        if(l1.val<l2.val){
            let node = new ListNode(l1.val);
            newList.next = node ;
            newList = node;
            l1 = l1.next;
        }else{
            let node = new ListNode(l2.val);
            newList.next = node;
            newList = node;
            l2 = l2.next;
        }
    }
    while(l1!==null){
        let node = new ListNode(l1.val);
        newList.next = node;
        newList = node;
        l1 =l1.next;
    }
    while(l2!==null){
        let node = new ListNode(l2.val);
        newList.next = node;
        l2 = l2.next;
        newList = node;
    }
    head = head.next;
    return head;
};

// Simpler Version Of The Same :-

var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(0);
    curr = head;
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            curr.next = l1;
            curr = curr.next;
            l1 = l1.next;
        }else if(l1.val > l2.val){
            curr.next = l2;
            curr = curr.next;
            l2 = l2.next;
        }else if(l1.val === l2.val){
            curr.next = l1;
            l1 = l1.next;
            curr = curr.next;
            curr.next = l2;
            l2 = l2.next;
            curr = curr.next;
        }
    }
    if(l1 !== null){
        curr.next = l1;
    }
    if(l2 !== null){
        curr.next = l2;
    }
    return head.next;
};