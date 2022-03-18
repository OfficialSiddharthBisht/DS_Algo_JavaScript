function partyOrNot(N , impFrnds , paise ,allFrnds){
    allFrnds = allFrnds.sort(function(a , b){
        return a - b;
    });
    let sum = 0;
    for(let i = 0; i < impFrnds; i++){
        sum += allFrnds[i];
    }
    if(sum > paise){
        console.log("Sad");
    }
    if(sum <= paise){
        console.log("Party");
    }
}

partyOrNot( 5 , 3 , 24 ,[6 ,4 ,21 ,20 ,13]);
