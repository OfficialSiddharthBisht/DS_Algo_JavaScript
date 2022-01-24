/* 
* The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
*/
let myMap = new Map();  // declaration of map

// methods 
//1 - set -  to give key and its corresponding value to the map data structure
myMap.set(1,"eak");
myMap.set(2,"do");
myMap.set(3,"teen");
myMap.set(4,"char");
myMap.set(5,"pach");
myMap.set(6,"che");
myMap.set(7,"sath");
myMap.set(8,"aath");
myMap.set(9,"nau");
myMap.set(10,"dhas");

console.log(myMap);

// when we only have to access key of map data structure
for(key of myMap.keys()){
    console.log(key);
}

// when we only have to access values of the map data structure
for(value of myMap.values()){
    console.log(value);
}

//when we have to access key as well as value together in a map
for([key , value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
} // * note in for of loop the array have key as 1st argurment and value as 2nd


myMap.forEach((value, key) => console.log(`value is ${value} and key is ${key}`));
// * note in forEach loop the in the array the first argument is value then key (major difference in forEach and for of loop in map data structure).

// mapName.delete(keyName)
myMap.delete(2);
console.log(myMap);

console.log(myMap.size);
console.log(myMap.has(11));  // Return true if the map has the element false otherwise. 

// resource - MDN - (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)