/* Given a string s , to write a program that count  the number of consonants (n-one vowel characters) presentin the string.
 */
function countConsonants(s) {
    //write code here
    let vowels = "aeiou";
    let count = 0;
    let consonantCount = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (s[i] === vowels[j]) {
                count++;
            }
        }
    }
    consonantCount = s.length - count;
    console.log(consonantCount);
}
countConsonants("siddharth");