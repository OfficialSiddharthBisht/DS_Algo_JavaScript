// Given the length and bredth of a rectangle
// using objects find the perimeter and area of it
var rect ={
  len:50,
  bred:30,
  area:function(len,bred)
  {
    return (len*bred);
  },
  perimeter:function()
  {
    return 2*(this.len+this.bred);
  }
}
console.log(rect.area(4,5));
console.log(rect.perimeter());