// Siddharth had hosted a Football tournament. You got hold of a profound description of the final match's process. On the whole, there are n lines in that description each of which described one goal. Every goal was marked with the name of the team that had scored it. Write a program to find the name of the team that won the finals. It is guaranteed that the match did not end in a tie

function footBallTournament(n,teamNamesArr)
{
    var team1=teamNamesArr[0];
    var count=0;
    for(var i=0;i<n;i++)
    {
        if(teamNamesArr[i]===team1)
        {
            count++;
        }
        else
        {
            var team2=teamNamesArr[i];
            count--;
        }
    }
    if(count>0)
    {
        console.log(team1);
    }
    else
    {
        console.log(team2);
    }
}

footBallTournament(5,["A","B","B","B","A"]);