var map1 = new Map();
map1.set("a",1);
map1.set("b",2);
map1.set("c",3);

console.log(map1.get("a"));

map1.set("a",10);
console.log(map1.get("a"));

map1.delete("b");

console.log(map1);

console.log(map1.size);

// another way to define a map is map2.js
