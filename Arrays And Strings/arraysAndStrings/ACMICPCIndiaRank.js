/*ICPC (https://icpc.baylor.edu/) is International Collegiate Programming Contest is an algorithmic programming contest for college students. You are provided list of countries in correct ranking. Your task is to write a program that prints the rank of India in ICPC.
Input         Output
5             5
Russia
USA
Japan
China
India*/
function ACM_ICPC_India_Rank(N, countriesArr) {
    for(let i=0;i<N;i++)
    {
        if(countriesArr[i]==="India")
        {
            console.log(i+1);
        }
    }
  }
  arr=[     
    "Russia",
    "USA",
    "Japan",
    "China",
    "India",
  ];
ACM_ICPC_India_Rank(5,arr);