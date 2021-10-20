//ICPC (https://icpc.baylor.edu/) is International Collegiate Programming Contest is an algorithmic programming contest for college students. You are provided list of countries in correct ranking. Your task is to write a program that prints the rank of India in ICPC.
// 5                                                5
// Russia
// USA
// Japan
// China
// India

function ACM_ICPC_India_Rank(N,countriesArr)
{
    for(var i=0;i<N;i++)
    {
        if(countriesArr[i]==="India")
        {
            console.log(i+1);
            break;
        }
    }
}

var countriesArr=["Russia","USA","Japan","China","India"];
ACM_ICPC_India_Rank(5,countriesArr);