/*  Create marks object which sores the names and marks of the students as an array with the key data.
Create the methods average(return the average marks) , minimum(name of student with minimum marks) , maximum (name of student with maximum marks)
*/

var marks={
   data:[
    {
        name:"Siddharth",
        marks:60,
    },
    {
        name:"Priyanka",
        marks:50,
    },
    {
        name:"Bhawana",
        marks:100,
    },
    {
        name:"Vishank",
        marks:40,
    },
],
    average:function()
    {
       var data= this.data;
       var sum=0;
       for(var i=0;i<data.length;i++)
       {
           sum+=data[i].marks;
       }
       return (sum/data.length);
    },
    minimum:function()
    {
        var data=this.data;
        var min=Number.MAX_SAFE_INTEGER;
        for(var i=0;i<data.length;i++)
        {
            if(data[i].marks<min)
            {
                min=data[i].marks;
            }
        }
        return (min);
    },
    maximum:function()
    {
        var data=this.data;
        var max=Number.MIN_SAFE_INTEGER;
        for(var i=0;i<data.length;i++)
        {
            if(data[i].marks>max)
            {
                max=data[i].marks;
            }
        }
        return max;
    }
    
}
console.log(marks.average());
console.log(marks.minimum());
console.log(marks.maximum());