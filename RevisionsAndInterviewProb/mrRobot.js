function playString(str){
    if(str.length - 1 === 1){
        return str;
    }
    if(str.length - 1 === 0){
        return "";
    }
    let mid = parseInt((str.length - 1) / 2);
    return str[mid] + playString(str.slice(0 ,mid)) + playString(str.slice(mid + 1));
}

console.log(playString("abcdefghijk"));