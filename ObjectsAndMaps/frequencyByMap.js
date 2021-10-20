function alanFrequency(N, string) {
    //write code here
    var count=0;
    var map1= new Map();
    for(var key of string)
    {
        if(map1.has(key)===false)
        {
            map1.set(key,1);
        }
        else
        {
            var put=map1.get(key)+1;
            map1.set(key,put);
        }
    }
    
    console.log(map1);
    for(key of map1)
    {
        console.log(key);
    }
  }
  alanFrequency(4,"aman");
  