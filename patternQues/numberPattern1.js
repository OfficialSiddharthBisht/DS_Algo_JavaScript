/* You are given a number, stored in a variable with the name num
You have to printnumlines, and on each line print all the numbers from 1 to the value stored in num
For example, if the value stored innum = 5, then the required output is
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/
function numberPattern1(num) {
    for (let i = 1; i <= num; i++) {
        let str = "";
        for (let j = 1; j <= num; j++) {
            str += j + " ";
        }
        console.log(str);
    }
}
numberPattern1(4);
