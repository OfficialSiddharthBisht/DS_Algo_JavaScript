function minimumPlatformsRequired(N ,arrival , departure){
    arrival = arrival.sort(function(a , b){
        return a - b;
    });
    departure = departure.sort(function(a , b){
        return a - b;
    });
    let platforms = 1;
    let maximumPlatforms = 1;
    let i = 1;
    let j = 0;
    while(i < N && j < N){
        if(arrival[i] > departure[j]){
            platforms--
            maximumPlatforms = Math.max(platforms, maximumPlatforms);
            j++;
        }
        if(arrival[i] <= departure[j]){
            platforms++;
            maximumPlatforms = Math.max(platforms, maximumPlatforms);
            i++;
        }
    }
    console.log(maximumPlatforms);
}
minimumPlatformsRequired(6 , [0900,0940,0950,1100,1500,1800],[0910,1200,1120,1130,1900,2000]);
minimumPlatformsRequired(3,[0900,1100,1235],[1000,1200,1240]);