/*
* Reverse Words in a String
Given an input string s, reverse the string word by word.
For example, given s = "the sky is blue", return "blue is sky the".

? Example Questions Candidate Might Ask:
Q: What constitutes a word?
A: A sequence of non-space characters constitutes a word.

Q: Does tab or newline character count as space characters?
A: Assume the input does not contain any tabs or newline characters.

Q: Could the input string contain leading or trailing spaces?
A: Yes. However, your reversed string should not contain leading or trailing spaces.

Q: How about multiple spaces between two words?
A: Reduce them to a single space in the reversed string.
*/

// ? Time Complexity : O(N) 
// ? Space Complexity : O(N);
function reverseWordsBruteForce(str){
    let N = str.length;
    str = str.trim();
    // inbuilt str.trim().split(" ") can also be used in place of below for loop
    let bite = [];
    let temp = "";
    for(let i = 0; i < N; i++){
        temp +=str[i];
        if(str[i] === " " || !str[i + 1]){
            bite.push(temp.trim());
            temp = "";
        }
    }
    let ans = "";
    for(let i = bite.length - 1; i >= 0 ; i--){
        ans += bite[i] + " ";
    }
    return ans;
}

// console.log(reverseWordsBruteForce("the sky is blue"));

