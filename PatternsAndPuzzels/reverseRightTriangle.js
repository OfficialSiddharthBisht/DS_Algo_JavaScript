/*Given an integer N
Sample Input
5 
Sample Output
* * * * *
* * * *  
* * *    
* *      
*  
The following pattern is used to show the spaces that you must have in the program,_is used to indicate the spaces.
*_*_*_*_*
*_*_*_*__
*_*_*____
*_*______
*________
Note: Underscore is only used to indicate spaces and not be printed in the actual program.
*/
function patternPrintingV(N) {
    // write code here
    for(let i=0;i<N;i++)
    {
        let str="";
        for(let j=N-1;j>=0;j--)
        {
            for(let k=0;k<j;k++)
            {
                str+="*"
            }
            console.log(str);
        }
        
    }
  }
patternPrintingV(5);
  