// Stack Class
class Stack
{
    constructor()
    {
        this.items=[];
    }

    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()
    push(element)
    {
        this.items.push(element);
    }
    pop()
    {
        // return the top most in the stack and removes it too
        // underflow if stack is empty
        if(this.items.length===0)
        {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek()
    {
        // returns the top most element from the stack without disturbing the stack
        return this.items[this.items.length-1];
    }

    isEmpty()
    {
        return this.items.length===0;
    }

    printStack()
    {
        var str="";
        for(var i=0;i<this.items.length;i++)
        {
            str+=this.items[i]+" ";
        }
        return str;
    }
}