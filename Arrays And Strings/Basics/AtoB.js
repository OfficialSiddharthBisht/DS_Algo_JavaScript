// Given 2 numbers,stored in variables with the following names min , max
// To print all the numbers form min to max , excluing max .Print each number in a new line 
function fromAtoB(max,min)
{
  var i=min;
  while(i<max)
  {
    console.log(i);
    i++;
  }
}

fromAtoB(19,13);