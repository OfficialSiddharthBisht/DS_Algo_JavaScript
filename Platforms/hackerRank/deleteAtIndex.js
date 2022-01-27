/*
Ques Link - https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem?isFullScreen=true

Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.

Example :-
After removing the node at position , .

Function Description

Complete the deleteNode function in the editor below.

deleteNode has the following parameters:
- SinglyLinkedListNode pointer llist: a reference to the head node in the list
- int position: the position of the node to remove

Returns
- SinglyLinkedListNode pointer: a reference to the head of the modified list

Input Format

The first line of input contains an integer , the number of elements in the linked list.
Each of the next  lines contains an integer, the node data values in order.
The last line contains an integer, , the position of the node to delete.

Constraints

, where  is the  element of the linked list.
Sample Input

8
20
6
2
19
7
4
15
9
3
Sample Output

20 6 2 7 4 15 9
Explanation

The original list is . After deleting the node at position , the list is .
*/
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(llist, position) {
    // Write your code here
    let curr = llist;
    let index = 0;
    if(position === 0){
        llist = llist.next;
    }
    while(curr.next !==null){
        if(index === position - 1){
            curr.next = curr.next.next;
        }        
        index ++;
        curr = curr.next;
    }
    return llist;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
        llist.insertNode(llistItem);
    }

    const position = parseInt(readLine(), 10);

    let llist1 = deleteNode(llist.head, position);

    printSinglyLinkedList(llist1, " ", ws)
    ws.write("\n");

    ws.end();
}
