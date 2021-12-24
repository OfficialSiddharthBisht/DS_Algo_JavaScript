/*
? Find Middle Node Of Linked List :- 
Given a non-empty, singly linked list with the head nodehead, return a middle node of the linked list.

If there are two middle nodes, return the second middle node.

Complete the functionbelow, no need to take any input.

Input
This is a function complete problem.

Refer to sample input for understanding

The first line contains the number of nodes (t)

Next t lines contains the node of the linked list

t <= 1000

list[i] <= 1000

Output
Complete the function

Sample Input 1 
3
1
2
3

Sample Output 1
2
*/
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    let curr = head ;
    let size =0;
    while(curr.next!==null){
        curr = curr.next;
        size = size+1;
    }
    curr = head ;
    if(size%2===0){
        var middle = parseInt(size/2-1);
    }else{
        var middle = parseInt(size/2);
    }
    for(let i = 0;i <= middle ;i++){
        curr = curr.next;
    }
    return curr.data;
};

