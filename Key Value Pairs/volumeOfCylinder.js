/*Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
*/
var pi=Math.PI;
var volume=1;
var cylinder={
    radius:4,
    height:5,
};
var volume=pi*cylinder.radius*cylinder.radius*cylinder.height;
console.log(volume.toFixed(4));