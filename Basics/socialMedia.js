/*You have built your own social networking website. Now, since you wanted your website to be unique, you applied some rules on making friends according to the age of the people
So, the distance within which people can make friends depends on their age. Therefore, you have to print the output, which is the distance within which people can make friends according to the following rules
You are given the age of a person, stored in the variable with the nameN
1. If the value stored in N is less than 13, print "1 Kms", without quotes
2. Else if the age of the person is greater than or equal to 13, but less than 18, print "5 Kms", without quotes
3. Else if the age of the person is greater than or equal to 18, but less than 30, print "10 Kms", without quotes
4. Else print "You can have friends from anywhere", without quotes */
function socialNetworking(N) {
    // Write code here
    N=+N;
    if(N<13)
    {
        console.log("1 Kms");
    }
    else if(N>=13&&N<18)
    {
        console.log("5 Kms");
    }
    else if(N>=18&&N<30)
    {
        console.log("10 Kms");
    }
    else
    {
        console.log("You can have friends from anywhere");
    }
}
socialNetworking(15);
