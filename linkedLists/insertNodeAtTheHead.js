/*Given a pointer to the head of a linked list, insert a new node before the head. Return a reference to the new head of the list. The head pointer given may be null meaning that the initial list is empty.

Complete the function insertNodeAtHead in the editor below.

insertNodeAtHeadhas the following parameter(s):

LinkedListNode list: a reference to the head of a list
data: the value to insert in the data field of the new node
*/

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    this.head=head;
    this.data=data;
    var temp=new LinkedListNode(data);
    temp.next=head;
    return temp;
}
// * Sample Input
// 3
// 1
// 2
// 3
// * Sample Output
// 1
// 2 1
// 3 2 1
