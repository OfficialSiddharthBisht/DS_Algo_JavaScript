/*
Valid Parentheses LeetCode
Problem Link :- 
https://leetcode.com/problems/valid-parentheses/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 class Stack{
    constructor(){
        this.items = [];
    }
    //methods 
    // push - to put an element at the top of a stack
    push(element){
        this.items.push(element);
    }
    // pop - to remove one element from the top of the stack
    pop(){
        return this.items.pop();
    }
    //peek -element at the top of the stack
    peek(){
       return this.items[this.items.length - 1];
    }
    //isEmpty -
    isEmpty(){
        return this.items.length === 0;
    }
}
var isValid = function(s) {
    let stack = new Stack();
    let N = s.length;
    for(let i = 0; i < N; i++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            stack.push(s[i]);
        }else{
            if(s[i] === ")" && stack.peek() === "("){
                stack.pop();
            } 
           else if(s[i] === "]" && stack.peek() === "["){
                stack.pop();
            }    
           else if(s[i] === "}" && stack.peek() === "{"){
                stack.pop();
            }else{
                return false;
            }
        }
    }
        return stack.isEmpty();
};
