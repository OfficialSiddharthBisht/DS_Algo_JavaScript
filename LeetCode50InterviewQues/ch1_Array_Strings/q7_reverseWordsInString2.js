/*
*  Reverse Words in a String II
Similar to Question [6. Reverse Words in a String], but with the following constraints:
“The input string does not contain leading or trailing spaces and the words are always 
separated by a single space.”
Could you do it in-place without allocating extra space?
*/

function reverseWordsInStr(str){
    //same code can also be implemented from q6
    str = str.trim().split(" ");
    let low = 0;
    let high = str.length - 1;
    while(low < high){
        let temp = str[low];
        str[low] = str[high];
        str[high] = temp;
        low++;
        high--;
    }
    return str.join(" ");
}

console.log(reverseWordsInStr("the sky is blue"));

/*Challenge 1:
Implement the two-pass solution without using the library’s split function
==> done in previous (q6) problem.
*/