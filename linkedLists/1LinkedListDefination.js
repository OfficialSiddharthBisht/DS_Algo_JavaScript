class Node
{
    constructor(element)
    {
        this.element=element;
        this.next=null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    //*methods

    //!add
    add(element)
    {
        var node=new Node(element);
        //if the linked list is empty
        if(!this.head)
        {
            this.head=node;
        }
        else   // it means that linked list already contains some value
        {
            var current=this.head;
            while(current.next)
            {
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }

    //insert
    insertAt(element,index)
    {
        //if index is greater then size of the linked list , index is negative , size is = 0
        if(index>this.size||index<0||this.size===0)
        {
            return false;
        }
        var node =new Node(element);
        var current=this.head;
        var prev=null;
        var i=0;
        if(index===0)
        {
            node.next=current;
            this.head=node;
            this.size++;
        }
        else
        {
            while(i<index)
            {
                prev=current;
                current=current.next;
                i++;
            }
            //insert at the index
            prev.next=node;
            // move tot he inserted node
            prev=prev.next;
            // add the rest of the current to the inserted node
            prev.next=current;
            this.size++;
        }

    }
    //delete
    removeElement(element)
    {
        var current=this.head;
        var prev =null;
        while(current)
        {
            if(current.element===element)
            {
                //null
                if(prev===null)
                 {
                 this.head=current.next;
                 }
                 else
                 {
                 prev.next=current.next;
                 }
                this.size--;
                console.log("Removed Element "+element);
                return true;
            }
         prev=current;
         current=current.next;
        }
    }
    //print
    printList()
    {
        var current=this.head;
        var index=0;
        while(current)
        {
            console.log("element: "+ current.element+" index "+index);
            index++;
            current=current.next;
        }
    }
    isEmpty()
    {
        if(this.size===0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    length()
    {
        return this.size;
    }
}

var list = new LinkedList();
list.add(5);
list.add(6);
list.add(7);
// list.printList();
list.insertAt("A",0);
list.insertAt("D",2)
list.insertAt("E",6); // will do nothing since it returns false cauz index dos'nt exhist
list.printList();
list.removeElement("D");
console.log("\n");
list.printList();
console.log(list.isEmpty());
console.log(list.length());
// console.log(list);